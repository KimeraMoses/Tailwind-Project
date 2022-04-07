import * as models from "@interface/models";
import moment from "moment-timezone";
import { SpecialityList } from "@constants";

export const getspecialityName = (id: string) => {
  return SpecialityList.find((s) => id === s.id)?.name || null;
};

export const getspecialityNames = (ids?: string[]) => {
  return (
    ids
      ?.map((id) => getspecialityName(id))
      .filter((name) => !!name)
      .join(", ") || null
  );
};

export const timeFormat = (dateTime: string, timeZone: string) => {
  return `${moment.tz(dateTime, timeZone).format("hh:mm a")}`;
};

export const slotTimeFormat = (slot: models.Slot, timeZone: string) => {
  return `${timeFormat(slot.startDateTime, timeZone)} - ${timeFormat(
    slot.endDateTime,
    timeZone
  )}`;
};

export const isValidBookingDate = (calendarDate: string, timeZone: string) => {
  const zonedDate = moment.tz(calendarDate, timeZone);
  return !(
    zonedDate.isBefore(moment(), "day") ||
    zonedDate.isAfter(moment().add(30, "day"), "day")
  );
};

export const removeEmptyQueryParams = (searchParams: any) => {
  return Object.keys(searchParams)
    .filter((key) => (searchParams as any)[key])
    .reduce((params, key) => {
      params[key] = (searchParams as any)[key];
      return params;
    }, {} as any);
};
