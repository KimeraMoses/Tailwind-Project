export type ApiResponse = {
  success: boolean;
  error?: string;
};

export type Slot = {
  availabilityId?: string;
  startDateTime: string;
  endDateTime: string;
};
