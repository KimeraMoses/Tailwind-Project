import { Months } from "@constants";
import React, { useState } from "react";
import { InputField } from "./../../../../components/InputField/InputField";
import { RiAddFill } from "react-icons/ri";

const WeekDay: React.FC<{ day: string }> = ({ day }) => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className={`px-6 py-0 m-1 rounded border border-primary select-none font-semibold cursor-pointer ${
        selected ? " bg-primary text-white" : " text-primary"
      }`}
      onClick={() => setSelected(!selected)}
    >
      {day}
    </div>
  );
};

const Scheduling: React.FunctionComponent = () => {
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
        <select className="form-select block box-border border border-gray rounded-lg select-none py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary mr-2 font-Poppins transition ease-in-out w-1/2">
          {Months.map((month, index) => {
            return (
              <option value={month.value} key={month.value + index}>
                {month.label}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mb-5">
        <label
          htmlFor="type of doctor"
          className="text-primary font-semibold w-1/5"
        >
          Days of the week
        </label>
        <div className="flex mt-3">
          <WeekDay day="Mon" />
          <WeekDay day="Tue" />
          <WeekDay day="Wed" />
          <WeekDay day="Thur" />
          <WeekDay day="Fri" />
          <WeekDay day="Sat" />
          <WeekDay day="Sun" />
        </div>
      </div>
      <div className="mb-5 flex flex-col">
        <label
          htmlFor="type of doctor"
          className="text-primary font-semibold mb-3"
        >
          Time Slots
        </label>
        <div className="flex items-center">
          <InputField
            type="text"
            placeholder="Type here"
            name="name"
            value=""
            customClasses="w-40"
          />
          <div className="bg-primary rounded px-3 py-2 cursor-pointer font-bold text-white flex justify-center items-center">
            <RiAddFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheduling;
