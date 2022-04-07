import * as models from "@interface/models";
import moment from "moment-timezone";

export const generateSelectableTimeSlots = (
  availabilities: models.Availability[],
  minDurationMinutes: number,
  calendarDate: string,
  timeZone: string
) => {
  const validAvailabilities = availabilities.filter(
    (a) => a.startDateTime !== null && a.endDateTime !== null
  );
  const openSlots = getInverse(validAvailabilities, calendarDate, timeZone);
  return openSlots.filter(
    (slot) =>
      moment(slot.endDateTime).diff(moment(slot.startDateTime), "minutes") >=
      minDurationMinutes
  );
};

export const getInverse = (
  availabilities: models.Availability[],
  calendarDate: string,
  timeZone: string
) => {
  const calendarMomentDate = moment.tz(calendarDate, timeZone);

  const momentAvailabilities = availabilities.map((a) => ({
    startDateTime: moment.tz(a.startDateTime, timeZone),
    endDateTime: moment.tz(a.endDateTime, timeZone),
  }));
  const validAvailabilities = momentAvailabilities.filter(
    (a) =>
      a.startDateTime.isSame(calendarMomentDate, "date") ||
      a.endDateTime.isSame(calendarMomentDate, "date")
  );

  const nonOverLappedAvailabilities = validAvailabilities; //TODO

  nonOverLappedAvailabilities.sort((a, b) =>
    a.startDateTime.isBefore(b.startDateTime) ? -1 : 1
  );

  const inverseList = [] as Array<{
    startDateTime: string;
    endDateTime: string;
  }>;

  const appendInverse = (
    endDateTime: moment.Moment,
    startDateTime: moment.Moment
  ) => {
    if (startDateTime.diff(endDateTime, "minutes") > 0)
      inverseList.push({
        startDateTime: endDateTime.toISOString(),
        endDateTime: startDateTime.toISOString(),
      });
  };

  for (let i = 0; i < nonOverLappedAvailabilities.length - 1; i++) {
    const a = nonOverLappedAvailabilities[i];
    const b = nonOverLappedAvailabilities[i + 1];
    appendInverse(a.endDateTime, b.startDateTime);
  }

  const startDay = moment.tz(calendarDate, timeZone).startOf("day");
  const endDay = moment
    .tz(calendarDate, timeZone)
    .endOf("day")
    .add(1, "millisecond");

  if (nonOverLappedAvailabilities.length > 0) {
    appendInverse(startDay, nonOverLappedAvailabilities[0].startDateTime);
    appendInverse(
      nonOverLappedAvailabilities[nonOverLappedAvailabilities.length - 1]
        .endDateTime,
      endDay
    );
  } else {
    inverseList.push({
      startDateTime: startDay.toISOString(),
      endDateTime: endDay.toISOString(),
    });
  }

  return inverseList;
};

export const splitSlots = (slot: models.Slot, intervalMinutes: number) => {
  const splitSlots = [];

  const originalEndDateTime = moment(slot.endDateTime);

  let startDateTime = moment(slot.startDateTime);
  let endDateTime = moment(startDateTime).add(intervalMinutes, "minutes");

  while (endDateTime.isSameOrBefore(originalEndDateTime, "minutes")) {
    splitSlots.push({
      startDateTime: startDateTime.toISOString(),
      endDateTime: endDateTime.toISOString(),
    });

    startDateTime = moment(endDateTime);
    endDateTime = moment(startDateTime).add(intervalMinutes, "minutes");
  }

  return splitSlots;
};


const cropOutAvailability = (availability: models.Availability, startDateTime: string, endDateTime:string) => {
    const availStartDateTime = moment(availability.startDateTime)
    const availEndDateTime = moment(availability.endDateTime)

    const startDateTimeMoment = moment(startDateTime)
    const endDateTimeMoment = moment(endDateTime)

    if(availStartDateTime.isSameOrAfter(startDateTimeMoment) && availEndDateTime.isSameOrBefore(endDateTimeMoment)) {
      return availability
    }
    else if(availStartDateTime.isBefore(startDateTimeMoment)  && availEndDateTime.isSameOrAfter(startDateTimeMoment) && availEndDateTime.isSameOrBefore(endDateTimeMoment)) {
      return ({...availability, startDateTime: startDateTimeMoment.toISOString()})
    }
    else if(availEndDateTime.isAfter(endDateTimeMoment)  && availStartDateTime.isSameOrAfter(startDateTimeMoment) && availStartDateTime.isSameOrBefore(endDateTimeMoment)) {
      return ({...availability, endDateTime: endDateTimeMoment.toISOString()})
    }

    return null
  }


export const cropAndSplitWithRange = (availabilities: models.Availability[], startDateTime: string, endDateTime:string) => {
  const croppedAvailabilities = [] as models.Availability[]
  
  const startDateTimeMoment = moment(startDateTime)
  const endDateTimeMoment = moment(endDateTime)

  for(const availability of availabilities) {
    
    const cropped = cropOutAvailability(availability, startDateTime, endDateTime)
    if(cropped)
      croppedAvailabilities.push(cropped)
  }

  return croppedAvailabilities
}


const localIdPrefix = "local_id__";

export const GenerateLocalId = () => {
  return `${localIdPrefix}${Math.random()}__${Date.now()}`;
};

export const IsLocalId = (id: string | number) => {
  return String(id).startsWith(localIdPrefix);
};

export const getConsultationCurrenyPriceRange = (
  consultations: models.Consultation[],
  currency: string
) => {
  const prices = consultations.map((consultation) => Number(consultation.fee));
  if (prices.length === 1) return `${prices[0]} ${currency}`;
  return `${Math.min(...prices)} - ${Math.max(...prices)} ${currency}`;
};

export const getConsultationPriceRange = (
  consultations: models.Consultation[]
) => {
  const currencices = {} as { [currency: string]: Array<models.Consultation> };
  consultations.forEach((consultation) => {
    currencices[consultation.currency] =
      currencices[consultation.currency] || [];
    currencices[consultation.currency].push(consultation);
  });
  return Object.keys(currencices)
    .map((currency) =>
      getConsultationCurrenyPriceRange(currencices[currency], currency)
    )
    .join("; ");
};
