import React, { useState, useCallback, useMemo } from "react";
import { DecoratedButton, DoctorDetailHeader } from "@components";
import { useNavigate } from "react-router-dom";
import moment from "moment-timezone";
import * as models from "@interface/models";
import { slotTimeFormat, MakeFlutterwavePayment } from "@utils";
import { StripePaymentFormModal } from "@components";
import { HttpApi } from "@api";
import { CreateModal } from "../Modal";
import { useCurrentUser } from "@hooks";
import { PaymentProcessors } from "@interface/enum";
import { AppointmentDetail } from "../AppointmentDetail";

export const BookingSummary: React.FC<BookingSummaryProps> = ({
  doctor,
  consultation,
  availability,
  startDateTime,
  endDateTime,
  timeZone,
  onCancel,
  onBooked,
}) => {
  const navigate = useNavigate();

  const user = useCurrentUser();

  const [patientNote, setPatientNote] = useState("");

  const onProceedToPay = useCallback(async () => {
    const apptParams = {
      doctor: doctor._id,
      amount: consultation.fee,
      currency: consultation.currency,
      startDateTime,
      endDateTime,
      patientNote,
      consultation: consultation._id,
      availability: availability._id,
      paymentProcessor: PaymentProcessors.flutterwave,
    };
    onCancel();
    const appointment = await HttpApi.createAppointment(apptParams);
    await MakeFlutterwavePayment(appointment);
    /*await StripePaymentFormModal({
      appointment: appointment,
      paymentIntentSecret: appointment.stripePaymentIntentSecret,
    });*/
  }, [
    doctor,
    consultation,
    startDateTime,
    endDateTime,
    patientNote,
    availability,
    onCancel,
    onBooked,
  ]);

  return (
    <AppointmentDetail
      status={null}
      doctor={doctor}
      account={user!}
      consultation={consultation}
      startDateTime={startDateTime}
      endDateTime={endDateTime}
      timeZone={timeZone}
      onPatientNoteChange={setPatientNote}
      onCancel={onCancel}
      onProceedToPay={onProceedToPay}
    />
  );
};

export const BookingSummaryModal = (props: BookingSummaryModalProps) => {
  return new Promise<models.Appointment | null>((res, rej) => {
    const modalArgs = { args: { dismiss: () => {} } };

    const args = CreateModal<BookingSummaryProps>(BookingSummary, {
      ...props,
      onCancel: () => modalArgs.args.dismiss(),
      onBooked: (appt) => {
        res(appt);
        modalArgs.args.dismiss();
      },
    });

    modalArgs.args = args;
    args.dismissPromise.then(() => res(null));
  });
};

type BookingSummaryModalProps = {
  doctor: models.Account;
  consultation: models.Consultation;
  availability: models.Availability;
  startDateTime: string;
  endDateTime: string;
  timeZone: string;
};

type BookingSummaryProps = BookingSummaryModalProps & {
  onCancel: () => void;
  onBooked: (appt: models.Appointment) => void;
};
