import React, { useMemo, useCallback } from "react";
import { DoctorDetailHeader, ConfirmModal } from "@components";
import { Link } from "react-router-dom";
import moment from "moment-timezone";
import { AppointmentStatusTypes, AccountTypes } from "@interface/enum";
import { useCurrentUser, useTimeZone } from "@hooks";
import { getConsultationPriceRange } from "@utils";
import { slotTimeFormat, ApproveAppointment } from "@utils";
import * as models from "@interface/models";
import { HttpApi } from "@api";

export const AppointmentListItem: React.FunctionComponent<
  AppointmentListItemProps
> = ({ appointment, onUpdate }) => {
  const timeZone = useTimeZone();
  const timeZoneName = useMemo(
    () => moment.tz.zone(timeZone)?.abbr(Date.now()) || timeZone,
    [timeZone]
  );
  const user = useCurrentUser();

  const onDecline = useCallback(async () => {
    const yes = await ConfirmModal({
      message: "Are you sure you want to decline this appointment?",
      cancelLabel: "Cancel",
      confirmLabel: "Decline appointment",
    });
    if (yes) {
      const updatedAppointment = await HttpApi.declineAppointment(
        appointment._id
      );
      onUpdate(updatedAppointment);
    }
  }, [appointment, onUpdate]);

  const onApprove = useCallback(async () => {
    const updatedAppointment = await ApproveAppointment(appointment);
    if (updatedAppointment) onUpdate(updatedAppointment);
  }, [appointment, onUpdate]);

  return (
    <div className="p-6 border rounded border-gray shadow mb-5">
      <div className="w-136 flex  justify-between">
        <div className="flex-col gap-3">
          <DoctorDetailHeader doctor={appointment.doctor} />
          <div className="mt-4">
            <div className="flex">
              <div className="text-medium mr-2">Status:</div>
              <div className="font-light">{appointment.status}</div>
            </div>
            {appointment.doctor._id === user?._id && (
              <div className="flex">
                <div className="text-medium mr-2">Patient:</div>
                <div className="font-light">
                  {appointment.account.firstName} {appointment.account.lastName}
                  {`${
                    appointment.account.whatsAppNum
                      ? `; ${appointment.account.whatsAppNum}`
                      : ""
                  }`}
                </div>
              </div>
            )}

            <div className="flex">
              <div className="text-medium mr-2">Date & time:</div>
              <div className="font-light">
                {moment
                  .tz(appointment.startDateTime, timeZone)
                  .format("YYYY-MM-DD")}{" "}
                - {`${slotTimeFormat(appointment, timeZone)} ${timeZoneName}`}
              </div>
            </div>
            <div className="flex">
              <div className="text-medium mr-2">Consultation:</div>
              <div className="font-light">
                {appointment.consultation.service}
              </div>
            </div>
            <div className="flex">
              <div className="text-medium mr-2">Consultation fee:</div>
              <div className="font-light">
                {appointment.consultation.currency} {appointment.amount}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Link
            to={`/appointment/${appointment._id}`}
            className="text-center p-1 w-36 border  rounded bg-primary text-white transition hover:bg-accent"
          >
            View details
          </Link>
          {user?.accountType === AccountTypes.DOCTOR &&
            appointment.status === AppointmentStatusTypes.RESERVED && (
              <>
                <button
                  onClick={onDecline}
                  className="p-1 w-36 border  rounded bg-primary text-white transition hover:bg-accent"
                >
                  Decline
                </button>
                <button
                  onClick={onApprove}
                  className="p-1 text-center w-36 border  rounded bg-primary text-white transition hover:bg-accent"
                >
                  Approve
                </button>
              </>
            )}
        </div>
      </div>
    </div>
  );
};

type AppointmentListItemProps = {
  appointment: models.Appointment;
  onUpdate: (appointment: models.Appointment) => void;
};
