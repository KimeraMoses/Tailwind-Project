import { Address, Clinic, Consultation } from "../models";
import { AccountTypes } from "@interface/enum";

export type AccountSearchInput = {
  speciality?: string;
  biograph?: string;
  consultation__service?: string;
  consultation__fee_min?: number;
  consultation__fee_max?: number;
  consultation__currency?: string;
  gender?: string;
  languages?: string;
  country?: string;
};

export type AddressInputType = {
  _id?: string;
  streetNum?: number;
  street?: string;
  city?: string;
  country?: string;
};

export type ClinicInput = {
  _id?: string;
  name?: string;
  address?: AddressInputType;
};

export type AccountUpdateInput = {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: Date;
  whatsAppNum?: string;
  mobileMoneyNumber?: string;
  gender?: string;
  address?: AddressInputType;
  timeZone?: string;
  languages?: string[];
  specialities?: string;
  clinic?: ClinicInput;
  biograph?: string;
  googleCalendarAuthCode?: string;
  retype?: string;
};

export type AccountCreateInput = AccountUpdateInput & {
  firstName: string;
  lastName: string;
  whatsAppNum: string;
  accountType: string;
  email: string;
  password: string;
  isTermsPrivacyPolicyAccepted: boolean;
  clinic?: ClinicInput;
  specialities?: string;
};

export type ResetPasswordInput = {
  token: string;
  password: string;
};

export type SignInInput = {
  email: string;
  password: string;
  accountType: AccountTypes;
};

export type ForgotPasswordInput = {
  email: string;
};

export type UpdatePasswordInput = {
  currentPassword: string;
  newPassword: string;
};

export type InputFields =
  | "firstName"
  | "lastName"
  | "timeZone"
  | "gender"
  | "whatsAppNum"
  | "languages";

export type AddressFields = "country" | "city";
export type ClinicFields = "name";
export type Input2Fields = "address" | "clinic";
export type Input2ChidFields = ClinicFields | AddressFields;

export type InputSignupFields =
  | "firstName"
  | "lastName"
  | "gender"
  | "whatsAppNum"
  | "email"
  | "isTermsPrivacyPolicyAccepted"
  | "specialities"
  | "password"
  | "retype";
