import React, { useCallback, useState, useMemo } from "react";
import { IonModal, IonApp } from "@ionic/react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { addModal, removeModal } from "@redux-store";

export function CreateModal<T>(
  Component: React.FunctionComponent<T>,
  ComponentProps: T,
  ModalProps?: ModalProps
) {
  let onDidDismiss!: (value?: unknown) => void;

  const data = {
    dismiss: () => {},
    dismissPromise: new Promise((res, rej) => {
      onDidDismiss = res;
    }),
  };

  const onWillPresent = (event: CustomEvent) => {
    const modal = event.target as HTMLIonModalElement;
    data.dismiss = modal.dismiss.bind(modal);
  };

  const modalId = `${Date.now()}-${Math.random()}-${Math.random()}`;

  addModal({
    id: modalId,
    ComponentProps,
    Component,
    onWillPresent,
    onDidDismiss,
    ModalProps: { ...ModalProps, className: "global-modal-class" },
  });

  return data;
}

export type ModalProps = React.HTMLAttributes<HTMLIonModalElement>;
