import { AppRoutes } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavBar } from "@components";
import { Outlet } from "react-router-dom";
import { HttpApi } from "@api";
import { useEffect, useState, useCallback, useMemo } from "react";
import { Loader } from "@components";
import { useModals, useLoaders } from "@redux-store";
import { IonModal, IonApp, IonPage, IonLoading } from "@ionic/react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    HttpApi.getAccount().finally(() => {
      setIsLoading(false);
    });
  }, []);

  const modals = useModals();
  const loaders = useLoaders();

  return (
    <IonPage className="overflow-auto h-full">
      {isLoading ? null : (
        <>
          <div className="app font-body relative ">
            <NavBar />
            <AppRoutes />
            <Outlet />
            <ToastContainer containerId="sdassdasd" draggable={false} />
          </div>
        </>
      )}

      {modals.map(
        ({
          id,
          onDidDismiss,
          onWillPresent,
          Component,
          ComponentProps,
          ModalProps,
        }) => (
          <IonModal
            key={id}
            {...ModalProps}
            showBackdrop={true}
            isOpen={true}
            onDidDismiss={onDidDismiss}
            onWillPresent={onWillPresent}
          >
            <Component {...ComponentProps} />
          </IonModal>
        )
      )}
      {loaders.map(({ id, onWillPresent, LoaderProps }) => (
        <IonLoading
          key={id}
          {...LoaderProps}
          isOpen={true}
          onWillPresent={onWillPresent}
        />
      ))}
    </IonPage>
  );
};

export default App;
