import React, { useState, useCallback, useMemo, useRef } from "react";
import Select from "react-select";
import {
  Button,
  ConfirmModal,
  DecoratedButton,
  showNotification,
} from "@components";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { DashboardView } from "@views";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as enums from "@interface/enum";
import * as input from "@interface/input";
import * as models from "@interface/models";
import {
  InputFields,
  AddressFields,
  ClinicFields,
  Input2Fields,
  Input2ChidFields,
} from "@interface/input";
import { useQuery, useCurrentUser } from "@hooks";
import { HttpApi } from "@api";
import {
  GenderList,
  CountryList,
  TimeZoneList,
  LanguageList,
  SpecialityList,
  countryData,
} from "@constants";

import { Consultations } from "./Consultations";
import { Certifications } from "./Certifications";
import { AvatarEditor } from "./Avatar";
import { InputField } from "src/components/InputField";
import { RiAttachment2 } from "react-icons/ri";
import image1 from "@assets/pdf.png";
import "../Register/Register.css";
import medLogo from "@assets/medatlas_logo.png";

const LanguageOptons = LanguageList.map((option) => ({
  value: option.id,
  label: option.name,
}));
const SpeciliatyOptions = SpecialityList.map((option) => ({
  value: option.id,
  label: option.name,
}));

export const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const user = useCurrentUser()!;
  const [inputParams, setInputParams] = useState(
    {} as input.AccountUpdateInput
  );

  const onInputChange = useCallback(
    (field: InputFields) => (event: React.SyntheticEvent) => {
      const { value } = event.target as HTMLInputElement;
      setInputParams((params) => {
        params[field] = value as any;
        return { ...params };
      });
    },
    []
  );

  const onClinicAddressInputChange = useCallback(
    (field: AddressFields) => (event: React.SyntheticEvent) => {
      const { value } = event.target as HTMLInputElement;
      setInputParams((params: any) => {
        params.clinic = {
          ...user.clinic,
          address: { ...user.clinic?.address },
        };
        params.clinic!.address![field] = value;
        return { ...params };
      });
    },
    [user]
  );

  const onInput2Change = useCallback(
    (field: Input2Fields, childField: Input2ChidFields) =>
      (event: React.SyntheticEvent) => {
        const { value } = event.target as HTMLInputElement;
        setInputParams((params: any) => {
          params[field] = params[field] || { ...user[field] };
          params[field]![childField] = value;
          return { ...params };
        });
      },
    [user]
  );

  const defaultLangOptions = useMemo(
    () =>
      LanguageOptons.filter((option) =>
        (user.languages || []).includes(option.value)
      ),
    [user]
  );
  const defaultspecialityOptions = useMemo(
    () =>
      SpeciliatyOptions.filter((option) =>
        (user.specialities || []).includes(option.value)
      ),
    [user]
  );

  const onMultiInputChange = useCallback(
    (label: "languages" | "specialities") =>
      (options: any, ...args: any[]) => {
        setInputParams((params) => {
          params[label] = options.map((option: any) => option.value);
          return { ...params };
        });
      },
    []
  );

  const onPhoneInputChange = useCallback(
    (label: "whatsAppNum" | "mobileMoneyNumber") => (value: string) => {
      setInputParams((params) => {
        params[label] = value as any;
        return { ...params };
      });
    },
    []
  );

  const onProfileFormSubmit: React.FormEventHandler = useCallback(
    async (event) => {
      setIsLoading(true);
      event.preventDefault();
      await HttpApi.updateAccount({ ...inputParams });
      setIsLoading(false);
      showNotification("Your profile has been updated", "success");
    },
    [inputParams]
  );

  const accountTypeName = useMemo(
    () => (user?.accountType as any)?.capitalize(),
    [user?.accountType]
  );

  const userWarnings = useMemo(() => {
    const warnings = [];
    if (user && user.accountType === "DOCTOR") {
      if (user.status !== "ACTIVE")
        warnings.push(
          "Your account is pending approval. In the meantime, add available times to your schedule"
        );

      if (!user.isProfileComplete)
        warnings.push(
          "Profile incomplete: Upload your picture and/or fill missing fields in the form below"
        );

      if (!user?.certifications || user?.certifications.length === 0)
        warnings.push(
          "Certifications missing: Upload your professional/medical degree and practising license"
        );
    }
    return warnings;
  }, [user]);

  return (
    <div className="bg-backgroundSidebar p-3 rounded">
      {userWarnings.length > 0 && (
        <div
          style={{ fontStyle: "italic", color: "red" }}
          className="mt-1 py-3 px-2"
        >
          {userWarnings.map((warning) => (
            <div className="mt-1" key={warning}>
              {warning}{" "}
              <Link to="/dashboard/scheduling" className="text-primary">
                here
              </Link>
            </div>
          ))}
        </div>
      )}
      <form className="bg-white pt-2 pb-3" onSubmit={onProfileFormSubmit}>
        <div className="flex">
          <div className="w-1/2 px-2 border-r border-primary pr-5">
            <div>
              <h4 className="text-base text-primary font-bold">
                Profile Picture
              </h4>
              <AvatarEditor />
            </div>
            <div className="flex gap-4 my-4 w-full">
              <div className="w-1/2">
                <h6 className="text-primary font-medium text-sm mb-1">
                  First Name
                </h6>
                <InputField
                  type="text"
                  placeholder="First Name"
                  required
                  defaultValue={user.firstName}
                  name="firstName"
                  onChange={onInputChange("firstName")}
                />
              </div>
              <div className="w-1/2">
                <h6 className="text-primary font-medium text-sm mb-1">
                  Surname
                </h6>
                <InputField
                  type="text"
                  required
                  name="lastName"
                  placeholder="Last Name"
                  defaultValue={user.lastName}
                  onChange={onInputChange("lastName")}
                />
              </div>
            </div>

            <div className="my-4">
              <h6 className="text-primary font-medium text-sm mb-1">Gender</h6>
              <select
                name="gender"
                required={user.accountType === enums.AccountTypes.DOCTOR}
                defaultValue={user.gender}
                onChange={onInputChange("gender")}
                className="form-select block box-border border border-gray w-full rounded-lg select-none py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary mr-2 font-Poppins transition ease-in-out"
              >
                {GenderList.map((gender) => (
                  <option key={gender.id} value={gender.id}>
                    {gender.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="my-4">
              <h6 className="text-primary font-medium text-sm mb-1">
                Email Address
              </h6>
              <InputField
                type="email"
                name="email"
                placeholder="Email"
                value={user.email}
                disabled
              />
            </div>

            <div className="my-4">
              <h6 className="text-primary font-medium text-sm mb-1">
                Languages spoken
              </h6>
              <Select
                className="shadow-0 w-full mb-0 border border-gray rounded-lg text-black bg-white"
                name="languages"
                placeholder="Languages"
                defaultValue={defaultLangOptions}
                options={LanguageOptons}
                onChange={onMultiInputChange("languages")}
                noOptionsMessage={(value) => "Select your languages"}
                isMulti
                isSearchable={true}
              />
            </div>

            <div className="my-4">
              <h6 className="text-primary font-medium text-sm mb-1">
                Mobile Number
              </h6>
              <div className="flex">
                <PhoneInput
                  className="appearance-none box-border border border-gray w-full rounded-lg select-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary font-body custom_style"
                  type="tel"
                  name="whatsAppNum"
                  value={user.whatsAppNum}
                  required
                  placeholder="WhatsApp / phone number"
                  onChange={onPhoneInputChange("whatsAppNum")}
                />
              </div>
              <div className="flex gap-4 my-4 w-full">
                <div className="w-1/2">
                  <h6 className="text-primary font-medium text-sm mb-1">
                    Country of Residence
                  </h6>
                  <select
                    name="clinic__address__country"
                    placeholder="Country"
                    required
                    defaultValue={user.clinic?.address?.country}
                    onChange={onClinicAddressInputChange("country")}
                    className="form-select block box-border border border-gray w-full rounded-lg select-none py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary mr-2 font-Poppins transition ease-in-out"
                  >
                    {CountryList.map((country) => (
                      <option key={country.id} value={country.id}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="w-1/2">
                  <h6 className="text-primary font-medium text-sm mb-1">
                    City
                  </h6>
                  <InputField
                    type="text"
                    name="address__city"
                    placeholder="City"
                    defaultValue={user.address?.city}
                    onChange={onInput2Change("address", "city")}
                  />
                </div>
              </div>
            </div>
          </div>
          {user.accountType === enums.AccountTypes.PATIENT ? (
            <div className="w-1/2 px-2 pl-5 flex items-center justify-center">
              <img src={medLogo} alt="MedAtlas Inc" className="" />
            </div>
          ) : (
            <div className="w-1/2 px-2 pl-5">
              {user.accountType === enums.AccountTypes.DOCTOR && (
                <div className="my-4">
                  <h6 className="text-primary font-medium text-sm mb-1">
                    Speciality
                  </h6>
                  <Select
                    className="shadow-0 w-full mb-0 border border-gray rounded-lg text-black bg-white"
                    name="specialities"
                    placeholder="Specialities"
                    defaultValue={defaultspecialityOptions}
                    options={SpeciliatyOptions}
                    onChange={onMultiInputChange("specialities")}
                    noOptionsMessage={(value) => "Select your specialities"}
                    isMulti
                    isSearchable={true}
                  />
                </div>
              )}
              {/* <div className="my-4">
                <h4 className="text-base text-primary font-bold">About Me</h4>
                <textarea
                  rows={4}
                  className="textarea textarea-primary box-border border border-gray w-full rounded-lg select-none text-gray-700 leading-tight py-2 px-3 focus:outline-none focus:border-primary mr-2 font-Poppins"
                  placeholder="Add information about you (will be visible to patients)"
                ></textarea>
              </div> */}
              {/* <div className="my-4">
                <h6 className="flex items-center mb-1 font-Poppins font-medium text-sm text-primary">
                  <RiAttachment2 />
                  Attachments ({user?.certifications.length})
                </h6>
                <div
                  className="p-5 rounded-xl flex flex-wrap items-center gap-1"
                  style={{
                    background: `linear-gradient(100.32deg, #FCF5FF -6.29%, #F5E4FF 88.21%)`,
                  }}
                >
                  {user?.certifications.map((certificate) => {
                    return (
                      <div
                        className="flex flex-col items-center justify-center mr-1 p-2"
                        key={certificate._id}
                      >
                        <img src={image1} alt="pdf" className="w-8 h-auto" />
                        <a
                          href={certificate?.file?.link}
                          download
                          className="text-xs text-primary font-medium mt-2 hover:text-accentHover"
                        >
                          {certificate.name}
                        </a>
                      </div>
                    );
                  })}

                  <div className="w-8 h-8 rounded-xl bg-backgroundPurple flex items-center justify-center text-white m-1">
                    +
                  </div>
                </div>
                <div className="my-1">
                  <p className="text-base text-primary">
                    <strong className="text-accent mr-1">Note:</strong>Please
                    only upload the Medical Degree or Practitioner
                    Degree,Specialist Certification and Current Practising
                    License. These documents will{" "}
                    <strong className="text-primary">not be visible</strong> to
                    patients and only for administrative use.
                  </p>
                </div>
              </div> */}

              <div className="my-4">
                <h6 className="text-primary font-medium text-sm mb-1">
                  Health Facility Name and Address
                </h6>
                <InputField
                  type="text"
                  name="clinic__name"
                  placeholder="Clinic name"
                  defaultValue={user.clinic?.name}
                  onChange={onInput2Change("clinic", "name")}
                  required
                />
              </div>
              <div className="my-4">
                <h6 className="text-primary font-medium text-sm mb-1">
                  Conultation Fees (Convert to USD)
                </h6>
                <div className="flex items-center">
                  <div className="py-1.5 px-4 border border-gray rounded-l-lg font-medium">
                    USD
                  </div>
                  <InputField
                    type="number"
                    placeholder="50,000"
                    name="amount"
                    value=""
                  />
                </div>
              </div>
              <div className="my-4">
                <h6 className="text-primary font-medium text-sm mb-1">
                  Follow-up Fees
                </h6>
                <div className="flex items-center">
                  <div className="py-1.5 px-4 border border-gray rounded-l-lg font-medium">
                    USD
                  </div>
                  <InputField
                    type="number"
                    placeholder="50,000"
                    name="amount"
                    value=""
                  />
                </div>
              </div>
              <div className="my-4">
                <h6 className="text-primary font-medium text-sm mb-1">
                  Mode of Payment
                </h6>
                <div className="flex">
                  <select
                    defaultValue="+256"
                    className="form-select block box-border border border-gray w-full rounded-lg select-none py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary mr-2 font-Poppins transition ease-in-out"
                  >
                    <option>Mobile Money</option>
                    <option>Bank Transfer</option>
                  </select>
                  <PhoneInput
                    className="appearance-none box-border border border-gray w-full rounded-lg select-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary font-body custom_style"
                    type="tel"
                    name="mobileMoneyNumber"
                    value={user.mobileMoneyNumber}
                    required
                    onChange={onPhoneInputChange("mobileMoneyNumber")}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-center my-4">
          <DecoratedButton
            color="primary"
            hoverColor="accent"
            className="px-4 py-1 w-1/2"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update Profile"}
          </DecoratedButton>
        </div>
      </form>
      {user.accountType === enums.AccountTypes.DOCTOR && (
        <div className="my-4 bg-white p-5 w-3/4">
          <Certifications user={user} />
        </div>
      )}
    </div>
  );
};
