import React, { useMemo, useCallback } from "react";
import { ConfirmModal, SelectAppointmentMeetingModal } from "@components";
import * as models from "@interface/models";
import { HttpApi } from "@api";
const BACKEND_URL = process.env.REACT_APP_API_ENDPOINT;

export const ApproveAppointment = async (appointment: models.Appointment) => {
  const yes = await ConfirmModal({
    message: "Are you sure you want to confirm this appointment?",
    cancelLabel: "Cancel",
    confirmLabel: "Confirm appointment",
  });
  if (yes) {
    const onlineMeeting = await SelectAppointmentMeetingModal();
    if (onlineMeeting) {
      const updatedAppointment = await HttpApi.approveAppointment(
        appointment._id,
        { onlineMeeting }
      );
      return updatedAppointment;
    }
  }

  return undefined;
};

export const getPaymentRedirectUrl = (appointment: models.Appointment) => {
  return `${BACKEND_URL}/api/appointment/${appointment._id}/reserve`;
};
