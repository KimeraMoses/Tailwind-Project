import React, { useState } from "react";
import AppointmentCard from "src/components/AppointmentCard/AppointmentCard";
import AppointmentTable from "./PatientTables/AppointmentTable";
import BillingTable from "./PatientTables/BillingTable";
import ReportTable from "./PatientTables/ReportTable";

const appointmentData = [
  {
    title: "Physiotherapy Appointment",
    doctor: "Doctor Mugera",
    description: "Lower back pains which come with stinging headaches.",
    date: "Mon,10:30 am EAT",
    means: "Virtual Meeting",
  },
  {
    title: "Fertility Appointment",
    doctor: "Doctor Margeret",
    description: "Discussion on how best we can acquire and manage serogates.",
    date: "Tue, 11:30 am EAT",
    means: "Physical (IMT Hospital)",
  },
  {
    title: "Ultrasonci Scan diagnostics",
    doctor: "Dr. Musinguzi John",
    description:
      "Reflection on the shared ultrasonic soft tissue scan documents.",
    date: "Thur, 12:00 am EAT",
    means: "Virtual meeting",
  },
];

const TABS = {
  APPOINTMENTS: "Appointments",
  REPORTS: "Reports",
  BILLING: "Billing",
};

const PatientsAppointments = () => {
  const [tab, setTab] = useState(TABS.APPOINTMENTS);
  return (
    <div className="w-full">
      <h3 className="text-primary font-semibold text-2xl mb-5">
        Up Coming Appointments
      </h3>
      <div className="flex flex-wrap">
        {appointmentData.map((app) => {
          return (
            <AppointmentCard
              title={app.title}
              doctor={app.doctor}
              description={app.description}
              date={app.date}
              means={app.means}
              key={app.title}
            />
          );
        })}
      </div>

      <div className="w-full mt-10 mx-auto">
        <div className="flex justify-center items-center">
          <div
            className={`mx-9 cursor-pointer select-none ${
              tab === TABS.APPOINTMENTS
                ? `text-accent font-semibold`
                : "text-primary font-medium"
            }`}
            onClick={() => setTab(TABS.APPOINTMENTS)}
          >
            Appointments
          </div>
          <div
            className={`mx-9 cursor-pointer select-none ${
              tab === TABS.REPORTS
                ? `text-accent font-semibold`
                : "text-primary font-medium"
            }`}
            onClick={() => setTab(TABS.REPORTS)}
          >
            Medical Reports
          </div>
          <div
            className={`mx-9 cursor-pointer select-none ${
              tab === TABS.BILLING
                ? `text-accent font-semibold`
                : "text-primary font-medium"
            }`}
            onClick={() => setTab(TABS.BILLING)}
          >
            Billing
          </div>
        </div>
        <div className="mx-4 select-none">
          {tab === TABS.BILLING ? (
            <BillingTable />
          ) : tab === TABS.REPORTS ? (
            <ReportTable />
          ) : (
            <AppointmentTable />
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientsAppointments;
