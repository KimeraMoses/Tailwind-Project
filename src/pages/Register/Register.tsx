import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect,
} from "react";
import { showNotification } from "@components";
import { GenericView } from "@views";
import { GenderList, CountryList, SpecialityList } from "@constants";
import { Link, useNavigate } from "react-router-dom";
import * as enums from "@interface/enum";
import * as input from "@interface/input";
import { useQuery, useTimeZone } from "@hooks";
import { HttpApi } from "@api";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Select from "react-select";
import { DecoratedButton } from "@components";
import {
  InputSignupFields,
  AddressFields,
  ClinicFields,
  Input2Fields,
  Input2ChidFields,
} from "@interface/input";
import { InputField, RadioInput } from "src/components/InputField";
import "./Register.css";

const SpeciliatyOptions = SpecialityList.map((option) => ({
  value: option.id,
  label: option.name,
}));

export const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [registerAs, setRegisterAs] = useState("specialist");

  const registerSelectHandler = (e: any) => {
    const { value } = e.target;
    setRegisterAs(value);
  };

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
        return "Specialist Registration";
      case enums.AccountTypes.PATIENT:
        return "Patient Registration";
      case enums.AccountTypes.ADMIN:
        return "Admin Registration";
      default:
        return "Account Registration";
    }
  }, []);

  return (
    <GenericView
      isDoctor={accountType === enums.AccountTypes.DOCTOR ? true : false}
    >
      <form onSubmit={onSubmit} ref={formRef}>
        <h3 className="mb-3 text-center text-2xl font-semibold text-primary">
          {getSignUpTitle(accountType)}
        </h3>
        <div className="mb-7">
          <div>
            {accountType === enums.AccountTypes.DOCTOR && (
              <div className="my-3">
                <label className="text-base text-primary font-medium mb-1">
                  Register as {registerAs}
                </label>
                <div className="flex gap-2 ">
                  <div className="form-check form-check-inline">
                    <RadioInput
                      value="specialist"
                      label="Specialist"
                      name="specialist"
                      id="01"
                      onChange={registerSelectHandler}
                    />
                  </div>
                  <div className="form-check form-check-inline">
                    <RadioInput
                      value="clinic"
                      label="Clinic"
                      name="specialist"
                      id="02"
                      onChange={registerSelectHandler}
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="my-2">
              <label className="text-base text-primary font-medium mb-1">
                {accountType === enums.AccountTypes.DOCTOR &&
                registerAs === "clinic"
                  ? "Clinic Name"
                  : "First Name"}
              </label>
              <InputField
                name="firstName"
                placeholder={
                  registerAs === "specialist" ? "First Name" : "Clinic Name"
                }
                type="text"
                required
                onChange={onInputChange("firstName")}
              />
            </div>
            {registerAs === "specialist" ? (
              <div className="my-2">
                <label className="text-base text-primary font-medium mb-1">
                  Surname
                </label>
                <InputField
                  name="lastName"
                  required
                  placeholder="Type here"
                  type="text"
                  onChange={onInputChange("lastName")}
                />
              </div>
            ) : (
              <div className="my-2">
                <label className="text-base text-primary font-medium mb-1">
                  Address
                </label>
                <InputField
                  name="address"
                  required
                  placeholder="Type here"
                  type="text"
                  onChange={onInputChange("lastName")}
                />
              </div>
            )}
            <div className="my-2">
              <label className="text-base text-primary font-medium mb-1">
                Email
              </label>
              <InputField
                name="email"
                placeholder="name@gmail.com"
                type="email"
                required
                onChange={onInputChange("email")}
              />
            </div>

            <div className="my-2">
              <label className="text-base text-primary font-medium mb-1">
                Phone Number
              </label>
              <PhoneInput
                className="appearance-none box-border border border-gray w-full rounded-lg select-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary mr-2 font-Poppins custom_style"
                type="tel"
                name="whatsAppNum"
                value={inputParams.whatsAppNum}
                placeholder="WhatsApp number"
                onChange={onPhoneInputChange("whatsAppNum")}
              />
            </div>
            {registerAs === "specialist" && (
              <div className="my-2">
                <label className="text-base text-primary font-medium mb-1">
                  Gender
                </label>
                <select
                  className="form-select block box-border border border-gray w-full rounded-lg select-none py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary mr-2 font-Poppins transition ease-in-out"
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
              </div>
            )}
            {accountType === enums.AccountTypes.DOCTOR && (
              <div className="my-2">
                <label className="text-base text-primary font-medium mb-1">
                  Speciality
                </label>
                <Select
                  className="shadow-0 w-full mb-0 border border-gray rounded-lg text-black bg-white"
                  name="specialities"
                  placeholder="Specialities"
                  options={SpeciliatyOptions as any}
                  onChange={onMultiInputChange("specialities")}
                  noOptionsMessage={(value) => "Select your specialities"}
                  isMulti
                  isSearchable={false}
                />
              </div>
            )}

            <div className="my-2">
              <label className="text-base text-primary font-medium mb-1">
                Country
              </label>
              <select
                className="form-select block box-border border border-gray w-full rounded-lg select-none py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary mr-2 font-Poppins transition ease-in-out"
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
            </div>
            <div className="my-2">
              <label className="text-base text-primary font-medium mb-1">
                Password
              </label>
              <InputField
                name="password"
                placeholder="password"
                type="password"
                required
                onChange={onInputChange("password")}
              />
            </div>
            <div className="my-2">
              <label className="text-base text-primary font-medium mb-1">
                Confirm Password
              </label>
              <InputField
                name="retype"
                placeholder="password"
                type="password"
                required
                onChange={onInputChange("retype")}
              />
            </div>

            <div className="my-2">
              <label className="text-base text-primary font-medium mb-1">
                Verify your account using
              </label>
              <div className="flex gap-2 ">
                <div className="form-check form-check-inline">
                  <RadioInput
                    value="option1"
                    label="Mobile Number"
                    name="isVerified"
                    id="01"
                  />
                </div>
                <div className="form-check form-check-inline">
                  <RadioInput
                    value="option2"
                    label="Email"
                    name="isVerified"
                    id="02"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-2  items-center mt-3">
              <input
                onChange={onInputChange("isTermsPrivacyPolicyAccepted")}
                type="checkbox"
                required
                name="isTermsPrivacyPolicyAccepted"
              />

              <div className="text-sm text-primary font-medium">
                I have read and accept
                <Link
                  className="ml-2 transition-all text-accent font-semibold hover:text-primary"
                  to="/terms-conditions"
                  target="_blank"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-4">
          <DecoratedButton
            disabled={!formRef.current?.checkValidity()}
            color="accent"
            hoverColor="primary"
            className="w-3/4 px-6 py-1"
            type="submit"
          >
            Sign Up
          </DecoratedButton>
        </div>
        <div className="my-6">
          <div className="flex gap-1">
            Already have a MedAtlas account?{" "}
            <Link
              className="border-none transition-all text-accent font-semibold hover:text-primary"
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
