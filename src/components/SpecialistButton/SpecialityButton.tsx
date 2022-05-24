import React from "react";
import { Link } from "react-router-dom";

export const SpecialityButton: React.FunctionComponent = () => {
  return (
    <div className="w-full text-center mx-auto py-10 flex justify-center">
      <div className="flex items-center shadow-md select-none w-1/2">
        <div className="border border-accent font-bold text-base text-accent w-1/2 h-12 rounded-l-md flex items-center justify-center">
          Are you a Clinical Specialist?
        </div>
        <Link
          to="/register?accountType=DOCTOR"
          className="flex items-center justify-center font-bold text-base  w-1/2 h-12 bg-primary text-white rounded-r-md cursor-pointer"
        >
          Click to Join Our Specialist Network
        </Link>
      </div>
    </div>
  );
};
