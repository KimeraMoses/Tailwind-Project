import React from "react";
import welcomeBunner from "../../../assets/welcomebunner.png";
import { Link } from "react-router-dom";
import image from "../../../assets/bkgrd-authflow.jpeg";
import FeatureCard from "../../../components/FeatureCard/FeatureCard";
import NewsCard from "src/components/NewsCard/NewsCard";
import { useCurrentUser } from "@hooks";
import { MdOutlineHelpOutline } from "react-icons/md";

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
        <div className="w-1/3 text-primary font-medium">
          {" "}
          <p className="mb-5">
            Hello{" "}
            <strong className="text-primary font-medium">
              {" "}
              {!isPatient ? "Dr. " : ""}
              {user?.firstName + " " + user?.lastName}!
            </strong>
          </p>
          <p className="text-accent mb-2 font-medium">
            Thank you for joining MedAtlas.
          </p>
          <p className="mb-2">
            Our Vision at MedAtlas is connecting you to thousands of patients in
            Africa and the diaspora.
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
              the comfort of your home.
            </p>
          ) : (
            <p>
              Increase your visibility to clients across Africa with the click
              of a button. Patients can book an appointment with you, get a
              diagnosis, prognosis, monitoring and secondary advise in the
              comfort of their own home.
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
          image="https://uwaterloo.ca/news/sites/ca.news/files/styles/feature_xl/public/8273_colour.jpg?itok=KgO44A3h"
          location="University of Waterloo, Canada"
          date="6 Jan 2022"
          title="The future of Specialist care in Africa"
          description="Read how she founded MedAtlas, a telemedicine health-care
                platform to make fertility care in Africa more accessible."
          link="https://uwaterloo.ca/news/global-impact/future-specialist-care-africa"
        />
        <NewsCard
          image="https://uwaterloo.ca/public-health-sciences/sites/ca.public-health-sciences/files/resize/uploads/images/margaret-mutumba-circle-500-360x360.png"
          location="University of Waterloo, Canada"
          date="4 Aug 2021"
          title="MedAtlas wins Concept $5K startup competition"
          description="MedAtlas, founded by Public Health and Health Systems doctoral
          student Margaret Mutumba, has won the Concept $5K challenge for
          Spring 2021."
          link="https://uwaterloo.ca/public-health-sciences/news/medatlas-wins-concept-5k-startup-competition"
        />
      </div>
    </div>
  );
};

export default NewsFeeds;
