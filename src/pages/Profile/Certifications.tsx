import React, { useState, useCallback, useMemo, useRef } from "react";
import { Button, ConfirmModal, DecoratedButton } from "@components";
import * as input from "@interface/input";
import * as models from "@interface/models";
import { HttpApi } from "@api";

export const Certifications: React.FunctionComponent<CertificationProps> = ({
  user,
}) => {
  const certifications = useMemo(
    () => [...(user?.certifications || [])],
    [user]
  );

  const onSubmit: React.FormEventHandler = useCallback(async (event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const formData = new FormData(
      form
    ) as any as input.CertificationCreateInput;

    await HttpApi.createCertification(formData);

    form.reset();
  }, []);

  const onRemoveClick = useCallback(
    (certification: models.Certification) => async () => {
      const deleteConfirm = await ConfirmModal({
        message: "Are you sure you want to remove this certification?",
      });
      if (deleteConfirm) {
        await HttpApi.deleteCertification(certification._id);
      }
    },
    []
  );

  return (
    <form onSubmit={onSubmit}>
      <h3 className="mt-6 mb-2 text-xl font-medium">Certifications</h3>
      <div className="text-sm mb-6">
        Medical or professional degree
        <br />
        Current practicising license
      </div>
      <div className="flex items-center">
        <input
          className="
				        shadow
				        h-8
				        p-2
				        mr-3
				        "
          placeholder="Name of certification"
          type="text"
          name="name"
          required
        />
        <input type="file" name="file" required />
      </div>
      <div className="my-2" style={{ maxWidth: 234 }}>
        <button
          className="p-2 mb-3 px-4 rounded transition text-white bg-primary hover:bg-accent"
          type="submit"
        >
          Upload certification
        </button>
      </div>

      {certifications?.map((certification) => (
        <div
          className="flex items-center p-2 my-3 border rounded border-gray shadow"
          key={certification._id}
        >
          <a
            style={{ background: "grey", color: "white", padding: "0.5rem" }}
            className="mr-4 border-right rounded"
            href={certification.file?.link}
            target="_blank"
            rel="noreferrer"
          >
            Open file
          </a>
          <button
            className="p-2 px-4 rounded transition text-white bg-primary hover:bg-accent mr-2"
            style={{ maxWidth: 100 }}
            onClick={onRemoveClick(certification)}
          >
            Remove
          </button>
          <div className="flex items-center">
            Certification name
            <br />
            {certification.name}
          </div>
        </div>
      ))}
    </form>
  );
};

type CertificationProps = {
  user: models.Account;
};
