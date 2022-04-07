import { Address } from "./Address";
import { Certification } from "./Certification";
import { Clinic } from "./Clinic";
import { Consultation } from "./Consultation";
import { Payment } from "./Payment";
import { File } from "./File";
import { AccountTypes, AccountStatusTypes } from "../enum";

export interface Account {
  _id: string;
  email: string;
  password: string; //  needs to be hashed
  dateOfBirth: string;
  accountType: AccountTypes;
  status: AccountStatusTypes;
  isProfileComplete: boolean;
  verifiedByAdmin: boolean;
  isTermsPrivacyPolicyAccepted: boolean;
  lastName: string;
  firstName: string;
  whatsAppNum: string;
  mobileMoneyNumber?: string;
  cognitoId: string;
  createdTimestamp: Date;
  updatedTimestamp: Date;
  googleCalendarAuthCode?: string;

  address: Address; // country is required for doctor
  gender: string; // doctor has to fill in
  profilePicture?: File; // S3 storage link
  stripeCustomerId: string;

  // doctor only fields
  // When doctor sign in, they need to fill in items to prove their qualification
  timeZone: string;
  languages: string[];
  specialities: string[];
  clinic: Clinic;
  consultations: Consultation[];
  certifications: Certification[];
  // Items below can be added later
  biograph: string;
  payments: Payment[]; // This is just for receiving money
}
