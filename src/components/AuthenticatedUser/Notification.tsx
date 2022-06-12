import { toast } from "react-toastify";
export const showNotification = (
  message: string | any,
  type: "error" | "success" | "info" | "warn"
) => {
  const toaster = toast[type].bind(toast);
  toaster(message, { position: toast.POSITION.TOP_RIGHT });
};
