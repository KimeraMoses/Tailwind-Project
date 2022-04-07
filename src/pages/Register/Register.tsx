import React, { useState, useCallback, useMemo, useRef } from "react";
import { Button, showNotification } from "@components";
import { GenericView } from "@views";
import { GenderList, CountryList, SpecialityList } from "@constants";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as enums from "@interface/enum";
import * as input from "@interface/input";
import { useQuery, useTimeZone } from "@hooks";
import { HttpApi } from "@api";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Select from "react-select";
import {
  InputSignupFields,
  AddressFields,
  ClinicFields,
  Input2Fields,
  Input2ChidFields,
} from "@interface/input";

const SpeciliatyOptions = SpecialityList.map((option) => ({
  value: option.id,
  label: option.name,
}));

export const Register = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [inputParams, setInputParams] = useState(
    {} as input.AccountCreateInput
  );
  const navigate = useNavigate();
  const searchParams = useQuery();

  const accountType = useMemo(
    () => searchParams.get("accountType") || enums.AccountTypes.PATIENT,
    [searchParams]
  ) as enums.AccountTypes;
  const counterAccountType = useMemo(
    () =>
      accountType === enums.AccountTypes.DOCTOR
        ? enums.AccountTypes.PATIENT
        : enums.AccountTypes.DOCTOR,
    [accountType]
  );

  const timeZone = useTimeZone();

  const onInputChange = useCallback(
    (field: InputSignupFields) => (event: React.SyntheticEvent) => {
      const target = event.target as HTMLInputElement;
      const { value } = target as HTMLInputElement;
      setInputParams((params) => {
        if (field === "isTermsPrivacyPolicyAccepted")
          params[field] = target.checked;
        else params[field] = value;
        return { ...params };
      });
    },
    []
  );

  const onPhoneInputChange = useCallback(
    (label: "whatsAppNum") => (value: string) => {
      setInputParams((params) => {
        params[label] = value as any;
        return { ...params };
      });
    },
    []
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

  const onInput2Change = useCallback(
    (field: Input2Fields, childField: Input2ChidFields) =>
      (event: React.SyntheticEvent) => {
        const { value } = event.target as HTMLInputElement;
        setInputParams((params: any) => {
          params[field] = params[field] || {};
          params[field]![childField] = value;
          return { ...params };
        });
      },
    []
  );

  const onClinicAddressInputChange = useCallback(
    (field: AddressFields) => (event: React.SyntheticEvent) => {
      const { value } = event.target as HTMLInputElement;
      setInputParams((params: any) => {
        params.clinic = params.clinic || {};
        params.clinic!.address = params.clinic.address || {};
        params.clinic!.address![field] = value;
        return { ...params };
      });
    },
    []
  );

  const onSubmit: React.FormEventHandler = useCallback(
    async (event) => {
      event.preventDefault();
      if (inputParams.password != inputParams.retype) {
        showNotification(
          "passwords don't match, make sure your passwords are the same",
          "error"
        );
        return;
      }
      await HttpApi.createAccount({ ...inputParams, accountType, timeZone });
      navigate(`/login?accountType=${accountType}`);
      showNotification(
        "Verify your account by clicking the link sent to your email address",
        "success"
      );
    },
    [inputParams, navigate, accountType, timeZone]
  );

  const getSignUpTitle = useCallback((accountType: enums.AccountTypes) => {
    switch (accountType) {
      case enums.AccountTypes.DOCTOR:
        return "Doctor Registration";
      case enums.AccountTypes.PATIENT:
        return "Patient Registration";
      case enums.AccountTypes.ADMIN:
        return "Admin Registration";
      default:
        return "Account Registration";
    }
  }, []);

  return (
    <GenericView>
      <form onSubmit={onSubmit} ref={formRef}>
        <h3 className="my-6 text-center text-2xl font-medium">
          {getSignUpTitle(accountType)}
        </h3>
        <div className="mb-7">
          <div>
            <input
              className="
				        border
						border-gray
						rounded
				        w-full
				        h-12
				        p-4
				        mb-5
				        "
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              onChange={onInputChange("firstName")}
            ></input>
            <input
              className="
				        border
						border-gray
						rounded
				        w-full
				        h-12
				        p-4
				        mb-5
				        "
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              onChange={onInputChange("lastName")}
            ></input>
            {accountType !== enums.AccountTypes.DOCTOR && (
              <select
                className="
				        w-full
				      h-12
				      
				        mb-5 border border-gray p-2 rounded text-black bg-white"
                name="address__country"
                placeholder="Country"
                required
                onChange={onInput2Change("address", "country")}
              >
                <option value="">Select country</option>
                {CountryList.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
            )}

            <input
              className="
				        border
						border-gray
						rounded
				        w-full
				        h-12
				        p-4
				        mb-5
				        "
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={onInputChange("email")}
            ></input>
            <input
              className="
				        border
						border-gray
						rounded
				        w-full
				        h-12
				        p-4
				        mb-5
				        "
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={onInputChange("password")}
            ></input>
            <input
              className="
				        border
						border-gray
						rounded
				        w-full
				        h-12
				        p-4
				        mb-5
				        "
              type="password"
              name="retype"
              placeholder="Retype Password"
              required
              onChange={onInputChange("retype")}
            ></input>
            {accountType === enums.AccountTypes.DOCTOR ? (
              <>
                {/* Gender */}
                <select
                  className="shadow
				        w-full
				        h-11
				        p-2
				        mb-5 border border-gray rounded text-black bg-white"
                  name="gender"
                  placeholder="Gender"
                  required
                  onChange={onInputChange("gender")}
                >
                  <option value="">Select gender</option>
                  {GenderList.map((gender) => (
                    <option key={gender.id} value={gender.id}>
                      {gender.name}
                    </option>
                  ))}
                </select>

                {/* Whatsapp */}

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
                  value={inputParams.whatsAppNum}
                  placeholder="WhatsApp number"
                  onChange={onPhoneInputChange("whatsAppNum")}
                />

                {/* Especialities */}
                <Select
                  className="shadow
				        w-full
				        mb-5 border border-gray rounded text-black bg-white"
                  name="specialities"
                  placeholder="Specialities"
                  options={SpeciliatyOptions as any}
                  onChange={onMultiInputChange("specialities")}
                  noOptionsMessage={(value) => "Select your specialities"}
                  isMulti
                  isSearchable={false}
                />

                {/* Clinic */}

                <h3 className="font-medium mb-2">Clinic name & address</h3>
                <div className="pl-4">
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
                    onChange={onClinicAddressInputChange("country")}
                  >
                    <option value="">Select country</option>
                    {CountryList.map((country) => (
                      <option key={country.id} value={country.id}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            ) : (
              <></>
            )}

            <div className="flex gap-2 justify-center items-center">
              <input
                onChange={onInputChange("isTermsPrivacyPolicyAccepted")}
                type="checkbox"
                required
                name="isTermsPrivacyPolicyAccepted"
              />
              <div className="text-sm">
                I have read and accept
                <Link
                  className="ml-2 transition-all text-primary font-medium hover:text-accent"
                  to="/terms-conditions"
                  target="_blank"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Button type="submit" disabled={!formRef.current?.checkValidity()}>
          Register
        </Button>
        <div className="my-6 p-4">
          <div className="flex gap-1">
            Already have a MedAtlas account?{" "}
            <Link
              className="border-none transition-all text-primary font-medium hover:text-accent"
              to={`/login?accountType=${accountType}`}
            >
              Login
            </Link>
          </div>
        </div>
      </form>
    </GenericView>
  );
};
