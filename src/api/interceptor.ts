import axios from "axios";
import { showNotification } from "@components";
import { setCurrentUser, showLoader } from "@redux-store";

export class AuthTokenHandler {
  private static _token?: string | null;

  static get token(): string | null {
    if (this._token === undefined)
      this._token = localStorage.getItem("auth-token");

    return this._token;
  }

  static set token(value: string | null) {
    if (value) localStorage.setItem("auth-token", value);
    else localStorage.removeItem("auth-token");

    this._token = value;
  }
}

let loaderCounter = 0;
let loader: HTMLIonLoadingElement | null = null;

export function requestInterceptor(config: any): any {
  //setLoading(true)
  if (loaderCounter === 0)
    showLoader().then((l) => {
      loader = l;
    });

  loaderCounter++;

  if (AuthTokenHandler.token)
    config.headers["Authorization"] = `Bearer ${AuthTokenHandler.token}`;
  return config;
}

export function responseInterceptor(response: any): any {
  loaderCounter--;
  if (loaderCounter <= 0) {
    loaderCounter = 0;
    loader?.dismiss();
  }

  if (response.headers["set-auth-token"])
    AuthTokenHandler.token = response.headers["set-auth-token"];

  return response.data;
}

export function responseErrorInterceptor(error: any) {
  loaderCounter--;
  if (loaderCounter <= 0) {
    loaderCounter = 0;
    loader?.dismiss();
  }

  const response = error.response;

  if (response) {
    if (response.status === 401) {
      AuthTokenHandler.token = null;
      setCurrentUser(null);
    } else {
      const error =
        typeof response.data === "object"
          ? JSON.stringify(response.data)
          : response.data;
      showNotification(error, "error");
    }
  } else {
    showNotification(String(error), "error");
  }

  return Promise.reject(error);
}
