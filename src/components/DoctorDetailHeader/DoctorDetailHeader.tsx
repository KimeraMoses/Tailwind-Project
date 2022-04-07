import React, { useMemo } from "react";
import doctorImage from "@assets/doctor.png";
import * as models from "@interface/models";
import { getspecialityNames } from "@utils";
import countriesQuery from "countries-code";

export const DoctorDetailHeader: React.FunctionComponent<
  DoctorDetailHeaderProps
> = ({ doctor }) => {
  const specialities = useMemo(
    () => getspecialityNames(doctor?.specialities) || "",
    [doctor?.specialities]
  );

  return (
    <div className="flex items-center gap-3 ">
      <div
        className="
      w-12 h-12 
      rounded-full
      border-4 
      border-accent
      overflow-hidden 
      "
      >
        <img
          src={doctor.profilePicture?.link || doctorImage}
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-2 font-[300]">
        <h3>
          Dr {doctor.firstName} {doctor.lastName}
        </h3>
        <h3>{specialities}</h3>
        <h3>{`${doctor.clinic?.address?.city}, ${countriesQuery.getCountry(
          doctor.clinic?.address?.country
        )}`}</h3>
        <h3 className="font-[600]">{doctor.clinic.name}</h3>
      </div>
    </div>
  );
};

type DoctorDetailHeaderProps = {
  doctor: models.Account;
};
