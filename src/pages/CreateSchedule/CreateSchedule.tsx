import React, { useCallback, useState, useMemo } from "react";
import { useSearchAvailabilities, useCurrentUser, useTimeZone } from "@hooks";
import moment from "moment-timezone";
import * as models from "@interface/models";
import { HttpApi } from "@api";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MinusCircleIcon, PencilAltIcon } from "@heroicons/react/outline";
import {
  EditAvailabilityModal,
  ConfirmModal,
  TimeZoneSelector,
} from "@components";
import { isValidBookingDate, cropAndSplitWithRange } from "@utils";
import { SlotDurationMinutes } from "@constants";

export const CreateSchedule = () => {
  const [refreshId, setRefreshId] = useState(Date.now());

  const [localDate, setLocalDate] = useState(new Date());
  const onLocalDateChange = useCallback((date) => {
    setLocalDate(date);
  }, []);

  const calendarDate = useMemo(
    () => moment(localDate).format("YYYY-MM-DD"),
    [localDate]
  );

  const account = useCurrentUser()!;
  const timeZone = useTimeZone()!;

  const dateDisabled = useCallback(
    ({ date, view }: any) => {
      const dateFormat = moment(date).format("YYYY-MM-DD");
      return !isValidBookingDate(dateFormat, timeZone);
    },
    [timeZone]
  );

  const searchParams = useMemo(() => {
    const startDateTime = moment
      .tz(calendarDate, timeZone)
      .startOf("day")
      .toISOString();
    const endDateTime = moment
      .tz(calendarDate, timeZone)
      .endOf("day")
      .add(1, "millisecond")
      .toISOString();
    return { account: account._id, startDateTime, endDateTime };
  }, [calendarDate, account._id, timeZone, refreshId]);

  const refreshAvailabilities = useCallback(() => setRefreshId(Date.now()), []);

  const availabilities = useSearchAvailabilities(searchParams) || [];

  const croppedAvailabilies = useMemo(
    () =>
      cropAndSplitWithRange(
        availabilities || [],
        searchParams.startDateTime,
        searchParams.endDateTime
      ).map((s) => ({ ...s, id: getSlotId(s) })),
    [availabilities, searchParams]
  );

  const onEditClick = useCallback(async () => {
    const saved = await EditAvailabilityModal({
      availabilities: croppedAvailabilies,
      timeZone,
      calendarDate,
      title: "Edit availabilities",
      duration: SlotDurationMinutes,
    });
    if (saved) refreshAvailabilities();
  }, [
    croppedAvailabilies,
    refreshAvailabilities,
    timeZone,
    calendarDate,
    SlotDurationMinutes,
  ]);

  const onDeleteClick = useCallback(async () => {
    const confirmed = await ConfirmModal({
      message: `Are you sure you want to delete your availability on ${calendarDate}`,
      title: "Delete availability",
      confirmLabel: "Delete",
      cancelLabel: "Cancel",
    });
    if (confirmed) {
      await Promise.allSettled(
        availabilities
          .filter((a) => !a.locked)
          .map((availability) => HttpApi.deleteAvailability(availability._id))
      );
      refreshAvailabilities();
    }
  }, [availabilities, refreshAvailabilities, calendarDate]);

  return (
    <div className="dashboard-content w-full bg-backgroundSidebar p-3 rounded">
      <div className="mx-auto pb-5">
        <h1 className="text-3xl font-medium mb-8">Schedule Availability</h1>
        <div className="mb-6 ">
          <TimeZoneSelector className="max-w-sm" />
        </div>
        <div className="  sm:flex  gap-2  ">
          <div>
            <Calendar
              tileDisabled={dateDisabled}
              className="mb-4 sm:mb-0"
              onChange={onLocalDateChange}
              value={localDate}
            />
          </div>
          <div className=" self-stretch   md:flex  ">
            <div className=" flex flex-grow flex-col p-2">
              <div className="mb-4 md:mb-0">
                <h1>Appointment Duration</h1>
                <div className="w-48 border rounded p-2 bg-gray border-gray">
                  {SlotDurationMinutes} minutes
                </div>
              </div>

              <div className="mt-5">
                <div className="py-2 flex">
                  <button
                    onClick={onEditClick}
                    className="flex items-center gap-2 mr-5"
                  >
                    <PencilAltIcon className="h-8 w-8 text-primary transition hover:text-accent" />
                    {croppedAvailabilies.length > 0 ? "Edit" : "Add"}{" "}
                    availability
                  </button>
                  {croppedAvailabilies.length > 0 && (
                    <button
                      onClick={onDeleteClick}
                      className="flex items-center gap-2 transition "
                    >
                      <MinusCircleIcon className="h-8 w-8 text-primary transition hover:text-red" />
                      delete
                    </button>
                  )}
                </div>
              </div>

              <div className="mt-2">
                <h1>Time Slots</h1>
                <div className="gap-2 flex-wrap">
                  {croppedAvailabilies.map((availability) => (
                    <div
                      key={availability.id}
                      className="bg-primary text-white border rounded p-2 mb-1"
                      style={{ maxWidth: 200 }}
                    >
                      {moment
                        .tz(availability.startDateTime, timeZone)
                        .format("hh:mm a")}{" "}
                      -{" "}
                      {moment
                        .tz(availability.endDateTime, timeZone)
                        .format("hh:mm a")}
                      {availability.locked && (
                        <>
                          <br />
                          (reserved/booked)
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const getSlotId = (slot: models.Slot) => {
  return `${slot.startDateTime}-${slot.endDateTime}`;
};
