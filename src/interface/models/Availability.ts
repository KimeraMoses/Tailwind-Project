export interface Availability {
  _id: string;
  timeZone: string;
  startDateTime: string;
  endDateTime: string;
  duration: number;
  locked: boolean;
  createdTimestamp: string;
  updatedTimestamp: string;
  createdById: string;
  updatedById: string;
}
