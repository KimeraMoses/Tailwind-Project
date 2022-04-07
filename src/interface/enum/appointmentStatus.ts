export enum AppointmentStatusTypes {
  PENDING = "PENDING",
  RESERVED = "RESERVED",
  CONFIRMED = "CONFIRMED",
  DECLINED = "DECLINED",
  CANCELLED = "CANCELLED",
}

export const ActiveAppointmentStatuses = [
  AppointmentStatusTypes.RESERVED,
  AppointmentStatusTypes.CONFIRMED,
];
