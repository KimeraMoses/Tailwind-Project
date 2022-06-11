import React from "react";
import welcomeBunner from "../../../assets/welcomebunner.png";
import { Link } from "react-router-dom";
import image from "../../../assets/bkgrd-authflow.jpeg";
import FeatureCard from "../../../components/FeatureCard/FeatureCard";
import NewsCard from "src/components/NewsCard/NewsCard";
import { useCurrentUser } from "@hooks";

const NewsFeeds: React.FunctionComponent = () => {
  const user = useCurrentUser();
  const isPatient = user?.accountType === "PATIENT" ? true : false;

  return (
    <div className="w-full p-3 rounded font-body">
      <div className="flex items-center justify-center">
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
            <strong className="text-primary font-medium">
              {" "}
              {!isPatient ? "Dr. " : ""}
              {user?.firstName + " " + user?.lastName}!
            </strong>
          </p>
          <p className="text-accent mb-5 font-medium">
            Thank you for joining MedAtlas.
          </p>
          <p className="mb-5">
            Our vision at MedAtlas is to connecting you with Specialist Doctors
            from anywhere you are located!
          </p>
          {isPatient ? (
            <p className="">
              Simply{" "}
              <Link
                to="/dashboard/doctors"
                className="text-accent hover:text-primary font-medium"
              >
                Book An Appointment{" "}
              </Link>{" "}
              , Get diagnosis, treatment, monitoring and secondary advise from
              the comfort ofyour home.
            </p>
          ) : (
            <p>
              Simply set your availability{" "}
              <Link
                to="/dashboard/scheduling"
                className="text-accent hover:text-primary font-medium"
              >
                here{" "}
              </Link>{" "}
              for patients to easily make appointments
            </p>
          )}
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
        <NewsCard
          image={image}
          location="University of Waterloo, Canada"
          date="6 Jan 2022"
          title="The future of Specialist care in Africa"
          description="Read how she founded MedAtlas, a telemedicine health-care
                platform to make fertility care in Africa more accessible."
        />
        <NewsCard
          image={image}
          location="University of Waterloo, Canada"
          date="6 Jan 2022"
          title="The future of Specialist care in Africa"
          description="Read how she founded MedAtlas, a telemedicine health-care
                platform to make fertility care in Africa more accessible."
        />
      </div>
    </div>
  );
};

export default NewsFeeds;
