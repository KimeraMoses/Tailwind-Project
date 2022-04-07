import React, { useMemo } from "react";
import { DoctorDetailHeader } from "@components";
import { Link } from "react-router-dom";
import { getConsultationPriceRange } from "@utils";
import * as models from "@interface/models";

export const DoctorListItem: React.FunctionComponent<DoctorListItemProp> = ({
  doctor,
}) => {
  const range = useMemo(
    () => getConsultationPriceRange(doctor.consultations),
    [doctor.consultations]
  );

  return (
    <div className="p-6  w-full max-w-540 flex flex-col items-center gap-3 justify-between border rounded border-gray shadow md:flex-row">
      <DoctorDetailHeader doctor={doctor} />

      <div className="flex flex-col gap-3">
        <h3>{range}</h3>

        {/*
        <button className="p-1 w-36 border  rounded bg-primary text-white transition hover:bg-accent">
          View Profile
        </button>
      */}
        <Link
          to={`/doctor/${doctor._id}/book-appointment`}
          className="p-1 text-center w-36 border  rounded bg-primary text-white transition hover:bg-accent"
        >
          Book
        </Link>
      </div>
    </div>
  );
};

type DoctorListItemProp = {
  doctor: models.Account;
};
