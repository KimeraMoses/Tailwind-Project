import React, { useState, useCallback } from "react";
import { useSearchDoctors } from "@hooks";
import * as models from "@interface/models";
import * as input from "@interface/input";
import { DashboardView } from "@views";
import { useQuery } from "@hooks";
import { DoctorListItem, DoctorSearchFilter } from "@components";

export const DoctorList = () => {
  const query = useQuery();
  const [initialParams] = useState(getInitialSearchParams(query));
  const [params, setParams] = useState(initialParams);

  const doctors = useSearchDoctors(params);

  const onSearchChange = useCallback((params: input.AccountSearchInput) => {
    setParams(params);
  }, []);

  return (
    <DashboardView>
      <h1 className="text-3xl font-medium mb-8">Search Doctors</h1>

      <div className="m-auto md:flex md:justify-center gap-4  block max-w-1140 ">
        <DoctorSearchFilter
          initialParams={initialParams}
          onChange={onSearchChange}
        />
        {doctors &&
          doctors.length === 0 &&
          "Couldn't find doctors matching the search critetia"}
        <div className="flex flex-col items-center p-4 gap-3 flex-grow">
          {doctors?.map((doctor) => (
            <DoctorListItem key={doctor._id} doctor={doctor} />
          ))}
        </div>
      </div>
    </DashboardView>
  );
};

const getInitialSearchParams = (query: URLSearchParams) => {
  return {
    gender: query.get("gender") || "",
    country: query.get("country") || "",
    languages: query.get("languages") || "",
    speciality: query.get("speciality"),
  } as input.AccountSearchInput;
};
