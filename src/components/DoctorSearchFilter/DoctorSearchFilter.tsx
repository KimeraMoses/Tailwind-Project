import React, { useState, useCallback } from "react";
import { DecoratedButton } from "@components";
import * as input from "@interface/input";
import {
  CountryList,
  GenderList,
  LanguageList,
  SpecialityList,
} from "@constants";

export const DoctorSearchFilter: React.FunctionComponent<
  DoctorSearchFilterProps
> = ({ onChange, initialParams }) => {
  const [searchParams, setSearchParams] = useState<input.AccountSearchInput>(
    initialParams || { gender: "" }
  );

  const onParamChange = useCallback(
    (field: SearchFields) => (event: React.SyntheticEvent) => {
      const target = event.target as HTMLInputElement;
      const value = target.value;
      setSearchParams((params) => {
        params[field] = value;
        return { ...params };
      });
    },
    []
  );

  const onSearchSubmit: React.FormEventHandler = useCallback(
    (event) => {
      event.preventDefault();

      onChange(searchParams);
    },
    [onChange, searchParams]
  );

  return (
    <div
      className="
    relative  top-0 
    w-64
    h-128 p-4 
    border border-gray 
    shadow
    md:w-78
    md:sticky 
    md:top-navbarsOffset 
    xl:w-128
    "
    >
      <form onSubmit={onSearchSubmit} className="flex flex-col gap-3">
        <div>
          <h1 className="font-extralight mb-2">Type of Doctor</h1>
          <div className="pl-2">
            <select
              onChange={onParamChange("speciality")}
              className="border w-full border-gray p-2 rounded text-white bg-grayPrimary"
              name="speciality"
              defaultValue={searchParams.speciality}
            >
              <option value="">All </option>
              {SpecialityList.map((speciality) => (
                <option key={speciality.id} value={speciality.id}>
                  {speciality.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <h1 className="font-extralight mb-2">Gender</h1>
          <div className="pl-2">
            <label
              htmlFor="gender-option-all"
              className="flex gap-2 cursor-pointer items-center"
            >
              Any
              <input
                onChange={onParamChange("gender")}
                type="radio"
                value=""
                id="gender-option-all"
                name="gender"
                checked={searchParams.gender === ""}
              />
            </label>
            {GenderList.map((gender) => (
              <label
                key={gender.id}
                htmlFor={`gender-option-${gender.id}`}
                className="flex cursor-pointer gap-2 items-center"
              >
                {gender.name}
                <input
                  onChange={onParamChange("gender")}
                  type="radio"
                  value={gender.id}
                  name="gender"
                  id={`gender-option-${gender.id}`}
                  checked={searchParams.gender === gender.id}
                />
              </label>
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-extralight mb-2">Language</h1>
          <div className="pl-2">
            <select
              onChange={onParamChange("languages")}
              defaultValue={searchParams.languages}
              name="language"
              className="border w-full border-gray p-2 rounded text-white bg-grayPrimary"
            >
              <option value="">All</option>
              {LanguageList.map((language) => (
                <option key={language.id} value={language.id}>
                  {language.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <h1 className="font-extralight mb-2">Location</h1>
          <div className="pl-2">
            <select
              defaultValue={searchParams.country}
              onChange={onParamChange("country")}
              name="location"
              className="border w-full border-gray p-2 rounded text-white bg-grayPrimary"
            >
              <option value="">All</option>
              {CountryList.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-4 flex flex-col items-stretch">
          <DecoratedButton
            color="accent"
            hoverColor="accentHover"
            type="submit"
          >
            Search
          </DecoratedButton>
        </div>
      </form>
    </div>
  );
};

type SearchFields = "gender" | "languages" | "country" | "speciality";

type DoctorSearchFilterProps = {
  onChange: (params: input.AccountSearchInput) => void;
  initialParams?: input.AccountSearchInput;
};
