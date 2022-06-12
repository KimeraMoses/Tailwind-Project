import React, { useState, useCallback, useMemo, useRef } from "react";
import { ConfirmModal } from "@components";
import * as input from "@interface/input";
import * as models from "@interface/models";
import { HttpApi } from "@api";
import { InputField } from "src/components/InputField";
import { IconButton } from "@mui/material";
import { IoMdTrash } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";
import { AiOutlineFileWord, AiOutlineFilePdf } from "react-icons/ai";
import { showNotification } from "./../../components/Notification/Notification";
import { RiAttachment2 } from "react-icons/ri";

export const Certifications: React.FunctionComponent<CertificationProps> = ({
  user,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const certifications = useMemo(
    () => [...(user?.certifications || [])],
    [user]
  );

  const onSubmit: React.FormEventHandler = useCallback(async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const form = event.target as HTMLFormElement;

    const formData = new FormData(
      form
    ) as any as input.CertificationCreateInput;

    await HttpApi.createCertification(formData);
    setIsLoading(false);
    showNotification(
      "Your document has been uploadeded succesfully",
      "success"
    );
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
      <h3 className="mb-2 text-xl font-medium">Certifications</h3>
      <div className="text-sm mb-6 font-semibold text-primary">
        Medical or professional degree and Current practicising license
      </div>
      <div className="flex items-center">
        <InputField
          placeholder="Name of certification"
          type="text"
          name="name"
          required
        />
        <input
          className={`appearance-none box-border border border-gray w-full rounded-lg select-none py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary mr-2 font-body`}
          type="file"
          name="file"
          required
        />
      </div>
      <div className="my-2" style={{ maxWidth: 234 }}>
        <button
          className="p-2 mb-3 px-4 rounded transition text-white bg-primary hover:bg-accent"
          type="submit"
        >
          {isLoading ? "Uploading..." : "Upload certification"}
        </button>
      </div>

      <h6 className="flex items-center mb-1 font-Poppins font-medium text-sm text-primary">
        <RiAttachment2 />
        Uploaded Certificates ({certifications.length})
      </h6>
      <div
        className="p-5 rounded-xl flex flex-wrap items-center gap-1"
        style={{
          background: `linear-gradient(100.32deg, #FCF5FF -6.29%, #F5E4FF 88.21%)`,
        }}
      >
        {certifications?.map((certification) => (
          <div
            key={certification._id}
            className="flex w-full items-center justify-between border border-[#F5E4FF] shadow p-3 rounded-2xl mt-1 bg-white"
          >
            <div className="flex items-center">
              {certification.file.fileKey.split(".").slice(-1)[0] === "docx" ? (
                <AiOutlineFileWord className="text-2xl text-primary mr-1" />
              ) : (
                <AiOutlineFilePdf className="text-2xl text-primary mr-1" />
              )}
              <strong> {certification.name}</strong>
            </div>
            <div className="flex items-center">
              <a
                href={certification.file?.link}
                target="_blank"
                rel="noreferrer"
                className="w-[20] h-[20] bg-gray rounded-full mx-1 cursor-pointer"
              >
                <IconButton aria-label="menu" className="border border-primary">
                  <MdRemoveRedEye className="text-2xl text-primary" />
                </IconButton>
              </a>
              <div
                className="w-[20] h-[20] bg-gray rounded-full mx-1 cursor-pointer"
                onClick={onRemoveClick(certification)}
              >
                <IconButton aria-label="menu" className="">
                  <IoMdTrash className="text-2xl text-primary" />
                </IconButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </form>
  );
};

// <div
//   className="flex items-center p-2 my-3 border rounded border-gray shadow"
//   key={certification._id}
// >
//   <a
//     style={{ background: "grey", color: "white", padding: "0.5rem" }}
//     className="mr-4 border-right rounded"
//     href={certification.file?.link}
//     target="_blank"
//     rel="noreferrer"
//   >
//     Open file
//   </a>
//   <button
//     className="p-2 px-4 rounded transition text-white bg-primary hover:bg-accent mr-2"
//     style={{ maxWidth: 100 }}
//     onClick={onRemoveClick(certification)}
//   >
//     Remove
//   </button>
//   <div className="flex items-center">
//     Certification name
//     <br />
//     {certification.name}
//   </div>
// </div>;

type CertificationProps = {
  user: models.Account;
};
