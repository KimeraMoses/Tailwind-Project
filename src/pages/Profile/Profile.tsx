import React, { useState, useCallback, useMemo, useRef } from "react";
import Select from "react-select";
import { Button, ConfirmModal, showNotification } from "@components";
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
} from "@constants";

import { Consultations } from "./Consultations";
import { Certifications } from "./Certifications";
import { AvatarEditor } from "./Avatar";

const LanguageOptons = LanguageList.map((option) => ({
  value: option.id,
  label: option.name,
}));
const SpeciliatyOptions = SpecialityList.map((option) => ({
  value: option.id,
  label: option.name,
}));

export const Profile = () => {
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
      event.preventDefault();
      await HttpApi.updateAccount({ ...inputParams });
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
    <DashboardView>
      <div className=" ">
        <h3 className="mt-6 text-3xl font-medium">
          {accountTypeName} Account profile
        </h3>
        {userWarnings.length > 0 && (
          <div style={{ fontStyle: "italic", color: "red" }} className="mt-1">
            {userWarnings.map((warning) => (
              <div className="mt-1" key={warning}>
                {warning}
              </div>
            ))}
          </div>
        )}
        <div className="mt-6 flex-col-reverse gap-3 flex md:flex-row">
          <form
            onSubmit={onProfileFormSubmit}
            className="w-full  xl:w-132 md:w-128"
          >
            <div className="mb-7">
              <div
                className="
					        shadow
					        w-full
					        p-4
					        mb-5
					        "
              >
                <AvatarEditor />
              </div>
              <div>
                <input
                  className="
					        shadow
					        w-full
					        h-11
					        p-4
					        mb-5
					        "
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  defaultValue={user.firstName}
                  onChange={onInputChange("firstName")}
                ></input>
                <input
                  className="
					        shadow
					        w-full
					        h-11
					        p-4
					        mb-5
					        "
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  defaultValue={user.lastName}
                  onChange={onInputChange("lastName")}
                ></input>

                <select
                  className="shadow
				        w-full
				        h-11
				        p-2
				        mb-5 border border-gray rounded text-black bg-white"
                  name="gender"
                  placeholder="Gender"
                  required={user.accountType === enums.AccountTypes.DOCTOR}
                  defaultValue={user.gender}
                  onChange={onInputChange("gender")}
                >
                  <option value="">Select gender</option>
                  {GenderList.map((gender) => (
                    <option key={gender.id} value={gender.id}>
                      {gender.name}
                    </option>
                  ))}
                </select>

                <input
                  className="
					        shadow
					        w-full
					        h-11
					        p-4
					        mb-5
					        "
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={user.email}
                  readOnly
                ></input>

                <PhoneInput
                  className="
				        shadow
				        w-full
				        h-11
				        p-4
				        mb-5
				        "
                  type="tel"
                  name="whatsAppNum"
                  value={user.whatsAppNum}
                  required
                  placeholder="WhatsApp / phone number"
                  onChange={onPhoneInputChange("whatsAppNum")}
                />

                {user.accountType === enums.AccountTypes.DOCTOR && (
                  <Select
                    className="shadow
				        w-full
				        mb-5 border border-gray rounded text-black bg-white"
                    name="specialities"
                    placeholder="Specialities"
                    defaultValue={defaultspecialityOptions}
                    options={SpeciliatyOptions}
                    onChange={onMultiInputChange("specialities")}
                    noOptionsMessage={(value) => "Select your specialities"}
                    isMulti
                    isSearchable={false}
                  />
                )}
                {user.accountType === enums.AccountTypes.DOCTOR && (
                  <Select
                    className="shadow
				        w-full
				        mb-5 border border-gray rounded text-black bg-white"
                    name="languages"
                    placeholder="Languages"
                    defaultValue={defaultLangOptions}
                    options={LanguageOptons}
                    onChange={onMultiInputChange("languages")}
                    noOptionsMessage={(value) => "Select your languages"}
                    isMulti
                    isSearchable={false}
                  />
                )}

                <select
                  className="shadow
				        w-full
				        h-11
				        p-2
				        mb-5 border border-gray rounded text-black bg-white"
                  name="timezone"
                  placeholder="Default timezone"
                  required
                  defaultValue={user.timeZone}
                  onChange={onInputChange("timeZone")}
                >
                  <option value="">Select Timezone</option>
                  {TimeZoneList.map((timezone) => (
                    <option key={timezone.id} value={timezone.id}>
                      {timezone.name}
                    </option>
                  ))}
                </select>
                {user.accountType !== enums.AccountTypes.DOCTOR && (
                  <>
                    <h2 className="font-medium">Your address</h2>
                    <input
                      className="
					        shadow
					        w-full
					        h-11
					        p-4
					        mb-5
					        "
                      type="text"
                      name="address__city"
                      placeholder="City"
                      defaultValue={user.address?.city}
                      onChange={onInput2Change("address", "city")}
                    ></input>

                    <select
                      className="shadow
				        w-full
				        h-11
				        
				        mb-5 border border-gray p-2 rounded text-black bg-white"
                      name="address__country"
                      placeholder="Country"
                      defaultValue={user.address?.country}
                      onChange={onInput2Change("address", "country")}
                    >
                      <option value="">Select country</option>
                      {CountryList.map((country) => (
                        <option key={country.id} value={country.id}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </>
                )}

                {user.accountType === enums.AccountTypes.DOCTOR && (
                  <>
                    <h2 className="font-medium">Clinic name & address</h2>

                    <input
                      className="
					        shadow
					        w-full
					        h-11
					        p-4
					        mb-5
					        "
                      type="text"
                      name="clinic__name"
                      placeholder="Clinic name"
                      defaultValue={user.clinic?.name}
                      onChange={onInput2Change("clinic", "name")}
                      required
                    ></input>

                    <input
                      className="
					        shadow
					        w-full
					        h-11
					        p-4
					        mb-5
					        "
                      type="text"
                      name="clinic__address__city"
                      placeholder="City"
                      defaultValue={user.clinic?.address?.city}
                      onChange={onClinicAddressInputChange("city")}
                      required
                    ></input>

                    <select
                      className="shadow
				        w-full
				        h-11
				        mb-5 border border-gray p-2 rounded text-black bg-white"
                      name="clinic__address__country"
                      placeholder="Country"
                      required
                      defaultValue={user.clinic?.address?.country}
                      onChange={onClinicAddressInputChange("country")}
                    >
                      <option value="">Select country</option>
                      {CountryList.map((country) => (
                        <option key={country.id} value={country.id}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </>
                )}

                {user.accountType === enums.AccountTypes.DOCTOR && (
                  <h2 className="font-medium">Payments</h2>
                )}
                {user.accountType === enums.AccountTypes.DOCTOR && (
                  <PhoneInput
                    className="
					        shadow
					        w-full
					        h-11
					        p-4
					        mb-5
					        "
                    type="tel"
                    name="mobileMoneyNumber"
                    value={user.mobileMoneyNumber}
                    placeholder="mobile money"
                    onChange={onPhoneInputChange("mobileMoneyNumber")}
                  />
                )}
              </div>
            </div>

            <Button type="submit">Update profile</Button>
          </form>
          <div>
            {user.accountType === enums.AccountTypes.DOCTOR && (
              <div className="mt-8">
                <Consultations user={user} />
              </div>
            )}
            {user.accountType === enums.AccountTypes.DOCTOR && (
              <div className="mt-8">
                <Certifications user={user} />
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardView>
  );
};
