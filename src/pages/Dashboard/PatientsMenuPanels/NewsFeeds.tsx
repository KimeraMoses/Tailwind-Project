import React from "react";
import welcomeBunner from "../../../assets/welcomebunner.png";
import { Link } from "react-router-dom";
import image from "../../../assets/bkgrd-authflow.jpeg";
import { FaClock } from "react-icons/fa";
import FeatureCard from "./../../../components/FeatureCard/FeatureCard";

const NewsFeeds: React.FunctionComponent = () => {
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
        <div className="w-1/3">
          {" "}
          <p className="mb-5">
            Hello{" "}
            <strong className="text-primary font-medium">Kimera Moses!</strong>
          </p>
          <p className="text-accent mb-5 font-medium">
            Thank you for joining MedAtlas.
          </p>
          <p className="mb-5">
            Our vision at MedAtlas is to connecting you with Specialist Doctors
            from anywhere you are located!
          </p>
          <p className="">
            Simply{" "}
            <Link
              to="/dashboard/search-doctors"
              className="text-accent hover:text-primary font-medium"
            >
              Book An Appointment{" "}
            </Link>{" "}
            , Get diagnosis, treatment, monitoring and secondary advise from the
            comfort ofyour home.
          </p>
        </div>
        <div className="w-2/3">
          <div className="flex w-full my-2 items-start flex-wrap justify-evenly">
            <FeatureCard feature="Simple Booking" color="primary" />
            <FeatureCard feature="Certified Specialists" color="accent" />
            <FeatureCard feature="Secure Payments" color="accent" />
            <FeatureCard feature="Private and Confidential" color="primary" />
            <FeatureCard feature="Easier than travelling" color="primary" />
            <FeatureCard feature="All in One Place" color="accent" />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-8 my-8 select-none">
        <div className="bg-white p-5 shadow-sm w-96 rounded-md">
          <div className="flex justify-center">
            <img
              src={image}
              alt=""
              className="w-80 h-64 shadow-md rounded-md"
            />
          </div>
          <div className="font-Poppins pt-4">
            <h3 className="text-sm font-Poppins font-medium text-primary">
              University of Waterloo, Canada
            </h3>
            <div className="flex items-center text-primary my-1">
              <FaClock />
              <h6 className="text-xs font-normal ml-1">6 Jan 2022</h6>
            </div>
            <div className="text-primary my-2">
              <h2 className="font-bold text-lg">
                <Link to="/" className="hover:text-accent">
                  The future of Specialist care in Africa
                </Link>
              </h2>
              <p className="font-light text-sm">
                Read how she founded MedAtlas, a telemedicine health-care
                platform to make fertility care in Africa more accessible.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 shadow-sm w-96 rounded-md">
          <div className="flex justify-center">
            <img
              src={image}
              alt=""
              className="w-80 h-64 shadow-md rounded-md"
            />
          </div>
          <div className="font-Poppins pt-4">
            <h3 className="text-sm font-Poppins font-medium text-primary">
              University of Waterloo, Canada
            </h3>
            <div className="flex items-center text-primary my-1">
              <FaClock />
              <h6 className="text-xs font-normal ml-1">6 Jan 2022</h6>
            </div>
            <div className="text-primary my-2">
              <h2 className="font-bold text-lg">
                <Link to="/" className="hover:text-accent">
                  The future of Specialist care in Africa
                </Link>
              </h2>
              <p className="font-light text-sm">
                Read how she founded MedAtlas, a telemedicine health-care
                platform to make fertility care in Africa more accessible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeeds;
