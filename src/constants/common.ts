import { OnlineMeetingTypes } from "@interface/enum";

export const SlotDurationMinutes = 20;

export const MeetingTypeOptions = [
  { id: OnlineMeetingTypes.googleCalendar, name: "Google Meets" },
  { id: OnlineMeetingTypes.phone, name: "By WhatsApp/phone" },
];
