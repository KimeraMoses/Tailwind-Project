import React from "react";
import { ExclamationIcon } from "@heroicons/react/outline";
import { CreateModal, ModalProps } from "./Modal";

export const Confirm = ({
  message,
  title,
  onConfirm,
  onCancel,
  confirmLabel = "confirm",
  cancelLabel = "cancel",
}: PropTypes) => {
  return (
    <div className="w-full z-20 rounded bg-white flex flex-col justify-between items-center p-6">
      <div className="mb-8">
        {title && (
          <div className="flex items-center gap-4 border-b border-gray mb-5">
            <ExclamationIcon className="h-12 w-12 text-red" />
            <h1 className="text-2xl">{title}</h1>
          </div>
        )}
        <p className="text-xl font-light">{message}</p>
      </div>

      <div className="flex justify-between w-full">
        <button
          onClick={onCancel}
          className="px-6 p-2 rounded transition text-white bg-primary hover:bg-accent capitalize"
        >
          {cancelLabel}
        </button>

        <button
          onClick={onConfirm}
          className="px-6 p-2 rounded transition text-white bg-red capitalize"
        >
          {confirmLabel}
        </button>
      </div>
    </div>
  );
};

export const ConfirmModal = (props: PropTypes) => {
  return new Promise<boolean>((res, rej) => {
    const modalArgs = { args: { dismiss: () => {} } };

    const args = CreateModal<PropTypes>(
      Confirm,
      {
        ...props,
        onCancel: () => modalArgs.args.dismiss(),
        onConfirm: () => {
          res(true);
          modalArgs.args.dismiss();
        },
      },
      { style: { "--max-width": "450px" } as any }
    );

    modalArgs.args = args;
    args.dismissPromise.then(() => res(false));
  });
};

type PropTypes = {
  message: string;
  title?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};
