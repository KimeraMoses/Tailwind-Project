import React, { useState, useCallback, useMemo, useRef } from "react";
import { Button, ConfirmModal } from "@components";
import * as input from "@interface/input";
import * as models from "@interface/models";
import { Currencies } from "@constants";
import { HttpApi } from "@api";

export const Consultations: React.FunctionComponent<ConsultationProps> = ({
  user,
}) => {
  const [consultations, setConsultations] = useState(user.consultations);
  const [editConsult, setEditConsult] = useState<null | {
    _id?: string;
    isEditing: boolean;
  }>(null);

  const onConsultationSave = useCallback(
    (consultation: models.Consultation) => {
      setConsultations((_consultations) => {
        const updatedConsultations = [..._consultations];
        const index = updatedConsultations.findIndex(
          (c) => c._id === consultation._id
        );
        if (index >= 0) {
          updatedConsultations[index] = consultation;
        } else updatedConsultations.push(consultation);

        return updatedConsultations;
      });
      setEditConsult(null);
    },
    []
  );

  const onEditConsultationCancel = useCallback(() => {
    setEditConsult(null);
  }, []);

  const onEditConsultation = useCallback(
    (_id?: string) => () => {
      setEditConsult({ _id, isEditing: true });
    },
    []
  );

  const onRemoveConsultation = useCallback(
    (_id: string) => async () => {
      const yes = await ConfirmModal({
        message: "Are you sure you want to remove this consultation?",
      });
      if (yes) {
        await HttpApi.deleteConsultation(_id);
        setConsultations((consultations) => {
          const index = consultations.findIndex((c) => c._id === _id);
          if (index >= 0) consultations.splice(index, 1);
          return [...consultations];
        });
      }
    },
    []
  );

  return (
    <div>
      <h3 className="my-6 text-xl font-medium">Consultations</h3>
      <button
        className="p-2 mb-3 px-4 rounded transition text-white bg-primary hover:bg-accent"
        onClick={onEditConsultation()}
      >
        Add new consultation
      </button>
      {editConsult?.isEditing && !editConsult._id && (
        <EditConsultation
          onSave={onConsultationSave}
          onCancel={onEditConsultationCancel}
        />
      )}
      <div>
        {consultations.map((consultation) => (
          <div key={consultation._id}>
            <div className="flex">
              <div className="m-2">
                {consultation.service} | {consultation.currency}{" "}
                {consultation.fee}
              </div>
              <button
                className="m-2 cursor-pointer border-gray rounded"
                onClick={onEditConsultation(consultation._id)}
              >
                Edit
              </button>
              <button
                className="m-2 cursor-pointer border-gray rounded"
                onClick={onRemoveConsultation(consultation._id)}
              >
                Remove
              </button>
            </div>
            {editConsult?.isEditing && editConsult._id === consultation._id && (
              <EditConsultation
                consultation={consultation}
                onSave={onConsultationSave}
                onCancel={onEditConsultationCancel}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const EditConsultation: React.FunctionComponent<EditConsultationProps> = ({
  onSave,
  onCancel,
  consultation,
}) => {
  const onSubmit: React.FormEventHandler = useCallback(
    async (event) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const _params = Object.fromEntries(
        new FormData(form)
      ) as input.ConsultationUpdateInput;
      const params = { ..._params };
      if (consultation) {
        const updated = await HttpApi.updateConsultation(
          consultation._id,
          params
        );
        onSave(updated);
      } else {
        const newConsult = await HttpApi.createConsultation(params);
        onSave(newConsult);
      }
    },
    [onSave, consultation]
  );

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <div>
          <input
            className="
				        shadow
				        h-11
				        p-4
				        mb-2
				        "
            type="text"
            name="service"
            placeholder="Name of service / consultation"
            defaultValue={consultation?.service}
            required
          ></input>
          <select
            className="shadow
          h-11
          p-2
          mb-2 border border-gray rounded text-black bg-white"
            name="currency"
            placeholder="Select currency"
            required
            defaultValue={consultation?.currency}
          >
            <option value="">Select currency</option>
            {Currencies.map((currency) => (
              <option key={currency.id} value={currency.id}>
                {currency.name}
              </option>
            ))}
          </select>
          <input
            className="
				        shadow
				        h-11
				        p-4
				        mb-2
				        "
            type="number"
            name="fee"
            placeholder={`consultation fee`}
            defaultValue={consultation?.fee}
            min={0}
            required
          ></input>
        </div>
      </div>
      <div className="flex">
        <button
          style={{ minWidth: 100 }}
          className="m-1 p-2 px-4 rounded transition text-white bg-primary hover:bg-accent"
          type="reset"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          style={{ minWidth: 100 }}
          className="m-1 p-2 px-4 rounded transition text-white bg-primary hover:bg-accent"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  );
};

type ConsultationProps = {
  user: models.Account;
};

type EditConsultationProps = {
  onSave: (consultation: models.Consultation) => void;
  consultation?: models.Consultation;
  onCancel: () => void;
};
