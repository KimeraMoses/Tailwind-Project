import React from "react";
import welcomeBunner from "../../../assets/welcomebunner.png";
import { Link } from "react-router-dom";

const NewsFeeds = () => {
  return (
    <div className="w-full">
      <img
        src={welcomeBunner}
        alt="Welcome to MedAtlas"
        className="w-full h-auto mb-5"
      />
      <div className="p-4">
        <p>
          Hello <strong className="text-primary">Kimera Moses!</strong>
        </p>
        <p className="text-accent">Thank you for joining MedAtlas.</p>
        <p>
          Our vision at MedAtlas is connecting users with Specialist Doctors in
          Africa and beyond. Consult with Specialist Doctors for Africa with the
          click of a button{" "}
          <Link
            to="/dashboard/search-doctors"
            className="text-accent hover:text-primary"
          >
            Book Appointment.{" "}
          </Link>{" "}
          Get diagnosis, treatment,monitoring and secondary advise from the
          comfort of your home.
        </p>
      </div>
    </div>
  );
};

export default NewsFeeds;
