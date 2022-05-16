import React from "react";
import welcomeBunner from "../../../assets/welcomebunner.png";
import { Link } from "react-router-dom";

const NewsFeeds = () => {
  return (
    <div className="w-full p-3 rounded font-body">
      <div className="px-40 flex items-center justify-center mx-20">
        <img
          src={welcomeBunner}
          alt="Welcome to MedAtlas"
          className="h-auto mb-5 w-full rounded"
        />
      </div>
      <div className="p-4 bg-white rounded-md shadow-md flex gap-4">
        <div className="w-2/3">
          {" "}
          <p className="mb-5">
            Hello <strong className="text-primary">Kimera Moses!</strong>
          </p>
          <p className="text-accent mb-5">Thank you for joining MedAtlas.</p>
          <p className="mb-5">
            Our vision at MedAtlas is to connecting you with Specialist Doctors
            from anywhere you are located!
          </p>
          <p className="">
            Simply{" "}
            <Link
              to="/dashboard/search-doctors"
              className="text-accent hover:text-primary"
            >
              Book An Appointment{" "}
            </Link>{" "}
            , Get diagnosis, treatment, monitoring and secondary advise from the
            comfort ofyour home.
          </p>
        </div>
        <div className="w-1/3">
          <div className="flex gap-4 w-full my-2">
            <div className="bg-primary py-1 flex items-center justify-center shadow-sm rounded-md font-semibold text-white w-1/2">
              Simple <br />
              Booking
            </div>
            <div className="bg-accent py-1 flex items-center font-semibold shadow-sm rounded-md justify-center text-white w-1/2">
              Certified <br />
              Specialists
            </div>
          </div>
          <div className="flex gap-4 w-full my-2">
            <div className="bg-accent py-1 flex items-center justify-center shadow-sm rounded-md font-semibold text-white w-1/2">
              Secure <br />
              Payments
            </div>
            <div className="bg-primary py-1 flex items-center font-semibold shadow-sm rounded-md justify-center text-white w-1/2">
              Private <br />
              Confidential
            </div>
          </div>
          <div className="flex gap-4 w-full my-2">
            <div className="bg-primary py-1 flex items-center justify-center shadow-sm rounded-md font-semibold text-white w-1/2">
              Easier than
              <br />
              Traveling
            </div>
            <div className="bg-accent py-1 flex items-center font-semibold shadow-sm rounded-md justify-center text-white w-1/2">
              All in <br />
              One Place
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeeds;
