import React from "react";
import { Outlet } from "react-router-dom";

export const AppointmentBooking: React.FC = () => {
  return (
    <div className="bg-background py-10">
      <div className="flex justify-center mx-8">
        <Outlet />
      </div>
    </div>
  );
};
