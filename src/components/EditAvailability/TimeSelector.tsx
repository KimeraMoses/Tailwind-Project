import React, { useState, useRef, useCallback, useMemo } from "react";
import { MinusCircleIcon, PencilAltIcon } from "@heroicons/react/outline";
import moment from "moment-timezone";
import { splitSlots, generateSelectableTimeSlots, timeFormat } from "@utils";

import * as models from "@interface/models";

export const TimeSelector: React.FunctionComponent<TimeSelectorProps> = ({
  availability,
  timeZone,
  onChange,
  availabilities,
  duration,
  calendarDate,
  onDelete,
}) => {
  const startTimeContainer = useRef<HTMLSelectElement>(null);

  const [startDateTime, setStartDateTime] = useState(
    availability.startDateTime || null
  );
  const [endDateTime, setEndDateTime] = useState(
    availability.endDateTime || null
  );

  const availableSlots = useMemo(
    () =>
      generateSelectableTimeSlots(
        availabilities.filter((a) => a !== availability),
        duration,
        calendarDate,
        timeZone
      ),
    [availability, calendarDate, timeZone, availabilities, duration]
  );

  const calcSelectedSlot = useCallback(
    () => availableSlots.find((slot) => isWithInSlot(startDateTime, slot)),
    [availableSlots, startDateTime]
  );
  const selectedSlot = useMemo(() => calcSelectedSlot(), [calcSelectedSlot]);

  const startTimes = useMemo(
    () =>
      availableSlots.flatMap((availableSlot) =>
        splitSlots(availableSlot, duration)
          .filter((slot) => moment(slot.startDateTime).isAfter(moment()))
          .map((slot) => slot.startDateTime)
      ),
    [availableSlots]
  );
  const endTimes = useMemo(
    () =>
      !selectedSlot || !startDateTime
        ? []
        : splitSlots(selectedSlot, duration)
            .filter((slot) =>
              moment(slot.startDateTime).isSameOrAfter(moment(startDateTime))
            )
            .map((slot) => slot.endDateTime),
    [startDateTime, selectedSlot]
  );

  const handleFocus = useCallback(() => {
    startTimeContainer?.current?.focus();
  }, []);

  const onStartTimeChange = useCallback(
    (event: React.SyntheticEvent) => {
      const { value } = event.target as HTMLInputElement;
      const startDateTime = value || null;

      const newSelectedSlot = calcSelectedSlot()!;

      setEndDateTime((endDateTime) => {
        if (
          endDateTime !== null &&
          (startDateTime === null ||
            endDateTime <= startDateTime ||
            !isWithInSlot(endDateTime, newSelectedSlot))
        )
          endDateTime = null;

        setStartDateTime(startDateTime);
        onChange({ startDateTime, endDateTime });

        return endDateTime;
      });
    },
    [onChange, calcSelectedSlot]
  );

  const onEndTimeChange = useCallback(
    (event: React.SyntheticEvent) => {
      const { value } = event.target as HTMLInputElement;
      const endDateTime = value || null;
      setEndDateTime(endDateTime);
      onChange({ startDateTime, endDateTime });
    },
    [startDateTime, onChange]
  );

  return (
    <div className="flex justify-between gap-2 ">
      <div className="flex gap-2 ">
        <div>
          <h1 className="font-medium">Start Time</h1>

          <select
            ref={startTimeContainer}
            className="border rounded p-2 "
            value={startDateTime || ""}
            onChange={onStartTimeChange}
            disabled={availability.locked}
          >
            <option value="">Select start time</option>
            {startTimes.map((time) => (
              <option key={time} value={time}>
                {timeFormat(time, timeZone)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h1 className="font-medium">End Time</h1>
          <select
            className="border  rounded p-2"
            value={endDateTime || ""}
            onChange={onEndTimeChange}
            disabled={availability.locked}
          >
            <option value="">Select end time</option>
            {endTimes.map((time) => (
              <option key={time} value={time}>
                {timeFormat(time, timeZone)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex gap-2  self-end">
        <button onClick={handleFocus}>
          <PencilAltIcon className="h-8 w-8 text-primary transition hover:text-accent" />
        </button>
        <button onClick={onDelete}>
          <MinusCircleIcon className="h-8 w-8 text-primary transition hover:text-red" />
        </button>
      </div>
    </div>
  );
};

const isWithInSlot = (dateTime: string | null, slot: models.Slot) => {
  if (dateTime === null) return dateTime;

  const timeMomemt = moment(dateTime);

  const startDateTime = moment(slot.startDateTime);
  const endDateTime = moment(slot.endDateTime);
  return timeMomemt.isBetween(startDateTime, endDateTime, undefined, "[]");
};

type TimeSelectorProps = {
  onChange: (args: {
    startDateTime: string | null;
    endDateTime: string | null;
  }) => void;
  onDelete: () => void;
  availability: models.Availability;
  timeZone: string;
  calendarDate: string;
  duration: number;
  availabilities: models.Availability[];
};
