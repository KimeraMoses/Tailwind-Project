import React from "react";
import Image from "../../../../assets/team/margret.png";

const AppointmentSummary: React.FunctionComponent = () => {
  return (
    <div className="w-full">
      <h1 className="text-center my-6 font-semibold text-primary">
        Appointment Summary
      </h1>
      <hr className="text-primary" />
      <div className="text-center mx-auto w-52 flex justify-center items-center my-4">
        <div
          className="
      w-12 h-12 
      rounded-full
      border-4 
      border-accent
      overflow-hidden 
      transition 
      cursor-pointer
      bg-white
      hover:border-primary"
        >
          <img src={Image} className="w-full rounded-full" />
        </div>

        <div className="text-left ml-2">
          <h1 className="text-medium ">Kimera Moses</h1>
          <p className="font-light">Fertility Specialist </p>
          <p className="font-light">Kampala , Uganda </p>
          <p className="font-semibold">Women's Hospital</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSummary;
