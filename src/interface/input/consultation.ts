export type ConsultationSearchInput = {
  account?: string;
  service?: string;
  fee_min?: string;
  fee_max?: string;
  currency?: string;
};

export type ConsultationUpdateInput = {
  service?: string;
  fee?: string;
  currency?: string;
};
