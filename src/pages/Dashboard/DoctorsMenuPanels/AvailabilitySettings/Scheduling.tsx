import { Months } from "@constants";
import React, { useEffect, useState } from "react";
import { InputField } from "./../../../../components/InputField/InputField";
import { RiAddFill } from "react-icons/ri";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { getCurrentYear } from "./../../../../components/Footer/CopyRight";
import TimePicker from "./../../../../components/TimePicker/TimePicker";
import DatePicker from "./../../../../components/TimePicker/Calender";

// const WeekDay: React.FC<{ day: string }> = ({ day }) => {
//   const [selected, setSelected] = useState(false);
//   return (
//     <div
//       className={`px-6 py-0 m-1 rounded border border-primary select-none font-semibold cursor-pointer ${
//         selected ? " bg-primary text-white" : " text-primary"
//       }`}
//       onClick={() => setSelected(!selected)}
//     >
//       {day}
//     </div>
//   );
// };

const Scheduling: React.FunctionComponent = () => {
  const [value, onChange] = useState(new Date());
  const [month, setMonth] = useState("Jan");
  const [time, setTime] = React.useState(new Date());

  const activeMonths = Months.filter(
    (month) => month.value > new Date().getMonth()
  );

  return (
    <div className="w-full bg-white p-3 rounded">
      <h3 className="text-primary font-semibold text-2xl mb-5">
        Schedule Availabity
      </h3>
      <div className="mb-5">
        <label
          htmlFor="type of doctor"
          className="text-primary mb-1.5 font-semibold w-1/5"
        >
          Scheduling interval
        </label>
        <select className="form-select block box-border border border-gray rounded-lg select-none py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary mr-2 font-Poppins transition ease-in-out w-1/2">
          <option>Weekly</option>
          <option>Daily</option>
          <option>Monthly</option>
        </select>
      </div>
      <div className="mb-5">
        <label
          htmlFor="type of doctor"
          className="text-primary mb-1.5 font-semibold w-1/5"
        >
          Timing Slot Duration
        </label>
        <select className="form-select block box-border border border-gray rounded-lg select-none py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary mr-2 font-Poppins transition ease-in-out w-1/2">
          <option>15 Minutes</option>
          <option>30 Minutes</option>
          <option>1 hour</option>
        </select>
      </div>
      <div className="mb-5">
        <label
          htmlFor="type of doctor"
          className="text-primary mb-1.5 font-semibold w-1/5"
        >
          Month
        </label>
        <select
          onChange={(e) => setMonth(e.target.value)}
          className="form-select block box-border border border-gray rounded-lg select-none py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary mr-2 font-Poppins transition ease-in-out w-1/2"
        >
          {activeMonths.map((month, index) => {
            return (
              <option
                value={month.short}
                key={month.value + index}
                // onClick={() => setMonth(month.short)}
              >
                {month.long}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mb-5 w-132">
        <DatePicker value={value} setValue={onChange} />
      </div>
      <div className="flex mt-3">
        <TimePicker time={time} setTime={setTime} />
      </div>
    </div>
  );
};

export default Scheduling;
