// User input types
export type AvailabilityCreateInput = {
  startDateTime: string;
  endDateTime: string;
  duration: number;
  timeZone: string;
};

export type AvailabilitySearchInput = {
  account: string;
  startDateTime: string;
  endDateTime: string;
};

export type AvailabilityUpdateInput = {
  startDateTime?: string;
  endDateTime?: string;
  duration?: number;
  timeZone?: number;
};
