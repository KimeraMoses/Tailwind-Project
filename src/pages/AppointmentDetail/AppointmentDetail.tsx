import React, { useState, useCallback, useEffect } from "react";
import { DecoratedButton, DoctorDetailHeader } from "@components";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment-timezone";
import * as models from "@interface/models";
import { DashboardView } from "@views";
import { slotTimeFormat, ApproveAppointment } from "@utils";
import {
  AppointmentDetail as AppointmentDetailComponent,
  ConfirmModal,
} from "@components";
import { HttpApi } from "@api";
import { useGetAppointment, useTimeZone } from "@hooks";

export const AppointmentDetail = () => {
  const timeZone = useTimeZone();
  const { id } = useParams<{ id: string }>();
  const [appointment, setAppointment] = useState<models.Appointment | null>(
    null
  );

  useEffect(() => {
    HttpApi.getAppointment(id!).then(async (appt) => {
      setAppointment(appt);
    });
  }, [id]);

  const onDecline = useCallback(async () => {
    const yes = await ConfirmModal({
      message: "Are you sure you want to decline this appointment?",
      cancelLabel: "Cancel",
      confirmLabel: "Decline appointment",
    });
    if (yes) {
      const appointment = await HttpApi.declineAppointment(id!);
      setAppointment(appointment);
    }
  }, [id]);

  const onApprove = useCallback(async () => {
    const updatedAppointment = await ApproveAppointment(appointment!);
    if (updatedAppointment) setAppointment(updatedAppointment);
  }, [appointment, id]);

  return (
    <DashboardView>
      <div className="flex gap-4 w-full" style={{ maxWidth: 800 }}>
        {appointment && (
          <AppointmentDetailComponent
            id={appointment._id}
            status={appointment.status}
            doctor={appointment.doctor}
            account={appointment.account}
            consultation={appointment.consultation}
            startDateTime={appointment.startDateTime}
            endDateTime={appointment.endDateTime}
            patientNote={appointment.patientNote}
            onlineMeeting={appointment.onlineMeeting}
            timeZone={timeZone}
            onApprove={onApprove}
            onDecline={onDecline}
          />
        )}
      </div>
    </DashboardView>
  );
};
