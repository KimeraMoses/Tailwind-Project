import React from "react";
import AppointmentCard from "src/components/AppointmentCard/AppointmentCard";

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

const PatientsAppointments = () => {
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
          <div className="text-accent font-semibold mx-9">Appointments</div>
          <div className="text-primary mx-9 font-medium">Medical Reports</div>
          <div className="text-primary mx-9 font-medium">Billing</div>
        </div>
        Appointment Details Here
      </div>
    </div>
  );
};

export default PatientsAppointments;
