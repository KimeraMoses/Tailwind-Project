import { createSlice, EnhancedStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import * as models from "@interface/models";

export const uiSlice = createSlice({
  name: "modal",
  initialState: {
    modals: [] as Array<ModalCreateProps>,
    loaders: [] as Array<LoaderCreateProps>,
  },
  reducers: {
    addModal: (state, action) => {
      state.modals.push(action.payload);
    },
    removeModal: (state, action) => {
      const index = state.modals.findIndex((m) => m.id === action.payload);
      if (index >= 0) {
        state.modals.splice(index, 1);
        state.modals = [...state.modals];
      }
    },
    showLoader: function (state, action) {
      const { onWillPresent, LoaderProps } =
        action.payload as LoaderCreateProps;
      state.loaders.push({
        LoaderProps: LoaderProps as any,
        id: `${Math.random()}-${Date.now()}`,
        onWillPresent: (evt: CustomEvent) => {
          onWillPresent && onWillPresent(evt);
        },
      });
    },
  },
});

export type ModalProps = React.HTMLAttributes<HTMLIonModalElement>;
export type LoaderProps = React.HTMLAttributes<HTMLIonLoadingElement>;

export type ModalCreateProps<T = any> = {
  id: string;
  Component: React.FunctionComponent<T>;
  ComponentProps: any;
  onWillPresent: (event: CustomEvent) => void;
  onDidDismiss: () => void;
  ModalProps?: ModalProps;
};

export type LoaderCreateProps<T = any> = {
  id?: string;
  onWillPresent: (event: CustomEvent) => void;
  LoaderProps: LoaderProps;
};
