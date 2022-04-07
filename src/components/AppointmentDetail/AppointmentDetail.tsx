import React, { useState, useCallback, useMemo } from "react";
import { CreateModal } from "../Modal";

import { DecoratedButton, DoctorDetailHeader } from "@components";
import { useNavigate } from "react-router-dom";
import moment from "moment-timezone";
import * as models from "@interface/models";
import { AppointmentStatusTypes, AccountTypes } from "@interface/enum";
import { slotTimeFormat } from "@utils";
import { StripePaymentFormModal } from "@components";
import { HttpApi } from "@api";
import { useCurrentUser } from "@hooks";
export const AppointmentDetail = ({
  id,
  status,
  doctor,
  account,
  consultation,
  startDateTime,
  onlineMeeting,
  endDateTime,
  timeZone,
  onCancel,
  onProceedToPay,
  onPatientNoteChange,
  onDecline,
  onApprove,
  patientNote: initialNote,
}: AppointmentDetailProps) => {
  const navigate = useNavigate();
  const user = useCurrentUser();

  const timeZoneName = useMemo(
    () => moment.tz.zone(timeZone)?.abbr(Date.now()) || timeZone,
    [timeZone]
  );

  const [patientNote, setPatientNote] = useState(initialNote);

  const onNoteChange = useCallback(
    (event: React.SyntheticEvent) => {
      const { value } = event.target as HTMLInputElement;
      setPatientNote(value);
      onPatientNoteChange && onPatientNoteChange(value);
    },
    [onPatientNoteChange]
  );

  const meetingDetails = useMemo(() => {
    if (!onlineMeeting) return { type: "detail", details: "TBD" };

    if (onlineMeeting.link) return { type: "link", link: onlineMeeting.link };
    else if (onlineMeeting.type === "phone") {
      if (user?._id === doctor?._id) {
        return { type: "detail", details: "You will call the patient" };
      } else if (user?._id === account?._id) {
        return { type: "detail", details: "You will be called by the doctor" };
      }
      return { type: "detail", details: "The doctor will call the patient" };
    }

    return { type: "detail", details: "TBD" };
  }, [doctor, user, account, onlineMeeting]);

  return (
    <div className="w-full rounded shadow bg-white ">
      <h1 className="p-3 text-center font-semibold text-xl border-b border-gray">
        Appointment Summary
      </h1>

      <div className=" p-10 flex justify-center items-center">
        <DoctorDetailHeader doctor={doctor} />
      </div>

      <div className="p-5 border-t border-gray mt-1 flex flex-col gap-2">
        {status && <DetailsComponent title="Status:" description={status} />}
        <DetailsComponent
          title="Date:"
          description={moment.tz(startDateTime, timeZone).format("YYYY-MM-DD")}
        />
        <DetailsComponent
          title="Time:"
          description={`${slotTimeFormat(
            { startDateTime, endDateTime },
            timeZone
          )} ${timeZoneName}`}
        />
        <DetailsComponent
          title="Meeting link/details:"
          description={
            <>
              {meetingDetails.type === "detail" && meetingDetails.details}
              {meetingDetails.type === "link" && (
                <a
                  className="text-primary text-bold"
                  rel="noreferrer"
                  href={meetingDetails.link}
                  target="_blank"
                >
                  {meetingDetails.link}
                </a>
              )}
            </>
          }
        />
        <DetailsComponent
          title="Consulation:"
          description={consultation.service}
        />
        <DetailsComponent
          title="Consultation Fee:"
          description={`${consultation.currency} ${consultation.fee}`}
        />
        {user?._id === doctor._id && user?._id !== account._id && (
          <>
            <DetailsComponent
              title="Patient info:"
              description={`${account.firstName} ${account.lastName}`}
            />
            <DetailsComponent
              title="Patient contact:"
              description={`${account.email} ; ${account.whatsAppNum || ""}`}
            />
          </>
        )}
        <label htmlFor="message">Message: </label>
        <textarea
          defaultValue={initialNote}
          className="border border-gray shadow rounded h-28 p-2 font-light"
          placeholder="Indicate purpose of consultation."
          onChange={onNoteChange}
          readOnly={!!id || !onPatientNoteChange}
        ></textarea>
      </div>
      {user?.accountType === AccountTypes.DOCTOR &&
        status === AppointmentStatusTypes.RESERVED && (
          <div className="flex justify-between px-6">
            <DecoratedButton
              color="grayPrimary"
              hoverColor="grayAccent"
              onClick={onDecline}
            >
              Decline
            </DecoratedButton>
            <DecoratedButton onClick={onApprove}>Approve</DecoratedButton>
          </div>
        )}
      {user?._id === account._id && !id && (
        <div className="flex justify-between p-4 ">
          <DecoratedButton
            color="grayPrimary"
            hoverColor="grayAccent"
            onClick={onCancel}
          >
            Cancel
          </DecoratedButton>
          <DecoratedButton onClick={onProceedToPay}>
            Proceed to Pay
          </DecoratedButton>
        </div>
      )}
    </div>
  );
};

const DetailsComponent = ({
  title,
  description,
}: {
  title: string;
  description: any;
}) => (
  <div className="flex justify-between">
    <h1 className="text-medium ">{title}</h1>
    <p className="font-light">{description}</p>
  </div>
);

type AppointmentDetailProps = {
  id?: string;
  status: AppointmentStatusTypes | null;
  doctor: models.Account;
  account: models.Account;
  consultation: models.Consultation;
  onlineMeeting?: models.OnlineMeeting;
  startDateTime: string;
  endDateTime: string;
  timeZone: string;
  patientNote?: string;
  onCancel?: () => void;
  onProceedToPay?: () => void;
  onPatientNoteChange?: (note: string) => void;
  onDecline?: () => void;
  onApprove?: () => void;
};
