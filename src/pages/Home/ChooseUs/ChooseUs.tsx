import React from "react";
import Image from "@assets/homeBunner.png";

const ListItem: React.FC<{ itemName: string }> = ({ itemName }) => {
  return (
    <li className="flex text-2xl items-center">
      <svg
        width="27"
        height="21"
        viewBox="0 0 27 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.2575 20.8718L0.772217 12.3865L4.54555 8.61321L9.2575 13.3385L22.4547 0.12793L26.2281 3.90126L9.2575 20.8718Z"
          fill="#FC542F"
        />
      </svg>
      <span className="ml-1.5 text-2xl font-semibold text-primary mb-1 font-body">
        {itemName}
      </span>
    </li>
  );
};

const ChooseUs: React.FunctionComponent = () => {
  return (
    <div className="w-full p-5 py-5 shadow-md mb-5">
      <div className="flex items-center justify-between px-32">
        <div className="w-1/2 px-12">
          <h2 className="text-primary text-4xl font-bold mb-2">
            Why Choose MedAtlas?
          </h2>
          <p className="text-accent font-normal text-2xl mb-2">
            Register and speak with specialists from the comfort of your own
            home!
          </p>
          <ul>
            <ListItem itemName="Simple Booking" />
            <ListItem itemName="Verified Specialists" />
            <ListItem itemName="Online or In-person" />
            <ListItem itemName="Secure Payments" />
            <ListItem itemName="Private and Confidential" />
            <ListItem itemName="Easier than Traveling" />
            <ListItem itemName="All in one place" />
          </ul>
          <div className="flex justify-center my-3">
            <button className="py-2 px-6 border-none rounded-md text-white font-medium text-2xl transition bg-accent hover:bg-primary">
              Book Appointment
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <img
            src={Image}
            alt="Why Choose MedAtlas"
            width="502px"
            height="291px"
            className="rounded w-132 h-72"
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
