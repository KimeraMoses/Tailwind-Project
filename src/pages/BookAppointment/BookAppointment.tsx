import React, { useCallback, useMemo, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment-timezone";
import * as input from "@interface/input";
import * as models from "@interface/models";
import {
  DoctorDetailHeader,
  BookingSummaryModal,
  TimeZoneSelector,
} from "@components";
import { DashboardView } from "@views";
import { useGetDoctor, useTimeZone, useSearchOpenAvailabilities } from "@hooks";
import { splitSlots, slotTimeFormat, isValidBookingDate, cropAndSplitWithRange } from "@utils";
import { SlotDurationMinutes } from "@constants";

export const BookAppointment = () => {
  const navigate = useNavigate();

  // doctor's id
  const { id: doctorId } = useParams<{ id: string }>();
  const doctor = useGetDoctor(doctorId!);

  // Local user's timezone
  const timeZone = useTimeZone()!;

  const [consultation, setConsultation] = useState(
    doctor?.consultations[0] || null
  );

  useEffect(() => {
    setConsultation(doctor?.consultations[0] || null);
  }, [doctor]);

  const [slot, setSlot] = useState<models.Slot | null>(null);

  const [localDate, setLocalDate] = useState(new Date());
  const onLocalDateChange = useCallback((date) => {
    setLocalDate(date);
    setSlot(null);
  }, []);

  const calendarDate = useMemo(
    () => moment(localDate).format("YYYY-MM-DD"),
    [localDate]
  );

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

    return {
      account: doctorId,
      startDateTime,
      endDateTime,
    } as input.AvailabilitySearchInput;
  }, [calendarDate, doctorId, timeZone]);

  const availabilities = useSearchOpenAvailabilities(
    searchParams || ({} as any)
  );
  const slots = useMemo(
    () =>
      cropAndSplitWithRange(availabilities || [], searchParams.startDateTime, searchParams.endDateTime).flatMap((availability) =>
        splitSlots(availability, SlotDurationMinutes)
          .filter((slot) => moment(slot.startDateTime).isAfter(moment()))
          .map((s) => ({
            ...s,
            availabilityId: availability._id,
            id: getSlotId(s),
          }))
      ),
    [availabilities, searchParams]
  );

  const onSlotChange = useCallback(
    (event: React.SyntheticEvent) => {
      const { value } = event.target as HTMLInputElement;
      const slot = slots?.find((a) => a.id === value) || null;
      setSlot(slot);
    },
    [slots]
  );

  const onConsultationChange = useCallback(
    (event: React.SyntheticEvent) => {
      const { value } = event.target as HTMLInputElement;
      const consultation =
        doctor?.consultations?.find((a) => a._id === value) || null;
      setConsultation(consultation);
    },
    [doctor]
  );

  const onBookSubmit: React.FormEventHandler = useCallback(
    async (event) => {
      event.preventDefault();
      if (doctor && consultation && slot && availabilities) {
        const availability = availabilities.find(
          (a) => a._id === slot.availabilityId
        )!;
        await BookingSummaryModal({
          doctor,
          consultation,
          availability,
          timeZone,
          startDateTime: slot.startDateTime,
          endDateTime: slot.endDateTime,
        });
      }
    },
    [doctor, localDate, consultation, slot, availabilities, navigate]
  );

  return (
    <DashboardView>
      {doctor && (
        <form className="w-full  " onSubmit={onBookSubmit}>
          <div className="">
            <h1
              className="p-2 mb-5 b-2 border-b font-semibold
        text-xl
        "
            >
              Booking Appointment
            </h1>
          </div>
          <div className=" flex items-center p-3 mb-6">
            <DoctorDetailHeader doctor={doctor} />
            <select
              onChange={onConsultationChange}
              value={consultation?._id}
              className="border rounded p-2  ml-5"
              required
              name="consultation"
            >
              {doctor.consultations.map((consultation) => (
                <option key={consultation._id} value={consultation._id}>
                  {consultation.service} - {consultation.fee}{" "}
                  {consultation.currency}
                </option>
              ))}
            </select>
          </div>
          <div className="px-4">
            <TimeZoneSelector className="max-w-sm" />
          </div>
          <div className=" p-4 flex  gap-2">
            <Calendar
              className="mb-4 self-start sm:mb-0"
              onChange={onLocalDateChange}
              value={localDate}
              tileDisabled={dateDisabled}
            />
            <div className=" self-stretch flex flex-col">
              {slots.length > 0 ? (
                <div>
                  <h1 className="mb-2 text-md ">Select a time</h1>
                  <select
                    className="p-3 border rounded bg-primary text-white font-medium opacity-80 "
                    onChange={onSlotChange}
                    required
                    name="slot"
                  >
                    <option value="">Select a time slot</option>
                    {slots.map((slot) => (
                      <option key={slot.id} value={slot.id}>
                        {slotTimeFormat(slot, timeZone)}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div>No available time for this day</div>
              )}
              {slots.length > 0 ? (
                <button
                  disabled={!slot}
                  type="submit"
                  className="
                  mt-4 
                  p-3
                  border rounded 
                bg-primary 
                text-white
                  transition
                hover:bg-accent 
                 disabled:cursor-not-allowed
                 disabled:bg-grayPrimary
                 disabled:opacity-40
                 "
                >
                  Book Appointment
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </form>
      )}
    </DashboardView>
  );
};

const getSlotId = (slot: models.Slot) => {
  return `${slot.startDateTime}-${slot.endDateTime}`;
};
