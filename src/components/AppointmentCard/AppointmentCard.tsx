import React from "react";

const AppointmentCard = ({ doctor, title, description, date, means }: any) => {
  return (
    <div className="flex flex-col rounded-2xl bg-white shadow-md w-80 font-Poppins m-3 p-4">
      <div className="mb-2">
        <div className="bg-primary rounded-3xl py-1 inline-block text-white text-xs align-middle px-2">
          {doctor}
        </div>
      </div>
      <div className="mb-3">
        <h4 className="text-base font-Poppins font-semibold">{title}</h4>
        <p className="text-sm font-normal" style={{ color: "#929292" }}>
          {description}
        </p>
      </div>
      <div className="flex justify-between">
        <div
          style={{
            background:
              "linear-gradient(100.32deg, #FCF5FF -6.29%, #F5E4FF 88.21%)",
            border: "0.5px solid rgba(86, 43, 133, 0.1) ",
          }}
          className="whitespace-nowrap text-black rounded-3xl text-xs py-1 px-2 flex items-center font-bold"
        >
          {date}
        </div>
        <div
          style={{
            background:
              "linear-gradient(100.32deg, #FCF5FF -6.29%, #F5E4FF 88.21%)",
            border: "0.5px solid rgba(86, 43, 133, 0.1) ",
          }}
          className="bg-backgroundUnique text-primary rounded-3xl  text-xs py-1 flex items-center font-bold px-2 whitespace-nowrap"
        >
          {means}
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
