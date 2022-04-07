import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import * as models from "@interface/models";
import { accountSlice } from "./account";
import {
  uiSlice,
  ModalCreateProps,
  LoaderProps,
  LoaderCreateProps,
} from "./modal";

export const store = configureStore({
  reducer: {
    account: accountSlice.reducer,
    ui: uiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const useCurrentUser = () => {
  return useSelector(
    (state: any) => state.account.user
  ) as models.Account | null;
};

export const setCurrentUser = (user: models.Account | null) => {
  store.dispatch(accountSlice.actions.setUser(user));
};

export const useModals = () => {
  return useSelector(
    (state: any) => state.ui.modals
  ) as Array<ModalCreateProps>;
};

export const useLoaders = () => {
  return useSelector(
    (state: any) => state.ui.loaders
  ) as Array<LoaderCreateProps>;
};

export const showLoader = (loaderProps?: LoaderProps) => {
  return new Promise<HTMLIonLoadingElement>((res, rej) => {
    store.dispatch(
      uiSlice.actions.showLoader({
        LoaderProps: loaderProps,
        onWillPresent: (evt: CustomEvent) =>
          res(evt.target as HTMLIonLoadingElement),
      })
    );
  });
};

export const addModal = (modalCreate: ModalCreateProps) => {
  store.dispatch(uiSlice.actions.addModal(modalCreate));
};

export const removeModal = (id: string) => {
  store.dispatch(uiSlice.actions.removeModal(id));
};
