import { Consultation } from "./Consultation";
import { OnlineMeeting } from "./OnlineMeeting";
import { Account } from "./Account";

import { AppointmentStatusTypes, PaymentProcessors } from "../enum";

export interface Appointment {
  _id: string;
  account: Account;
  doctor: Account;
  startDateTime: string;
  endDateTime: string;
  status: AppointmentStatusTypes;
  payStatus: string;
  consultation: Consultation;
  onlineMeeting: OnlineMeeting;
  amount: number;
  currency: string;
  patientNote: string;
  stripePaymentIntentId: string;
  stripePaymentIntentSecret: string;
  createdTimestamp: Date;
  updatedTimestamp: Date;
  createdById: string;
  updatedById: string;
  paymentProcessor: PaymentProcessors;
}
