import { Availability, Consultation, OnlineMeeting } from "../models";
import { PaymentProcessors } from "@interface/enum";

// User input types
export type AppointmentCreateInput = {
  doctor: string;
  startDateTime: string;
  endDateTime: string;
  consultation: string;
  patientNote?: string;
  amount: string;
  currency: string;
  availability: string;
  paymentProcessor: PaymentProcessors;
};

export type AppointmentSearchInput = {
  doctor?: string;
  account?: string;
  status?: string;
  startDateTime?: string;
  endDateTime?: string;
};

export type AppointmentUpdateInput = {
  patientNote?: string;
  onlineMeeting?: OnlineMeeting;
};
