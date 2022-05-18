import React, { useState, useCallback } from "react";
import { useSearchDoctors, useSearchAppointments } from "@hooks";
import * as models from "@interface/models";
import * as input from "@interface/input";
import { DashboardView } from "@views";
import { useQuery } from "@hooks";
import { AppointmentListItem } from "@components";

export const Appointments: React.FunctionComponent = () => {
  const [searchParams, setSearchParams] = useState(
    {} as input.AppointmentSearchInput
  );

  const appointments = useSearchAppointments(searchParams);

  const onAppointmentUpdate = useCallback((appointment: models.Appointment) => {
    setSearchParams((params) => ({ ...params }));
  }, []);

  return (
    <DashboardView>
      <div className="dashboard-content p-6 w-full">
        <div className="mx-auto ">
          <h1 className="text-3xl font-medium mb-8">Appointments</h1>
          <div>
            {appointments &&
              appointments.length === 0 &&
              "No appointments booked yet"}
            {appointments?.map((appointment) => (
              <AppointmentListItem
                key={appointment._id}
                appointment={appointment}
                onUpdate={onAppointmentUpdate}
              />
            ))}
          </div>
        </div>
      </div>
    </DashboardView>
  );
};
