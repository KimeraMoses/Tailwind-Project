import React from "react";
import { MdLocationOn, MdVerified } from "react-icons/md";
import { HiCreditCard } from "react-icons/hi";
import { DoctorProps } from "./DoctorCard";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";

const DoctorCardDashboard: React.FC<DoctorProps> = ({
  image,
  name,
  doctor,
  speciality,
  city,
  country,
  rating,
  isSelected,
  isDoctor,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between bg-white select-none mb-8 rounded-2xl p-3 shadow-md">
      <div className="flex">
        <img src={image} alt="" className="shadow-md rounded-xl w-40 h-40" />
        <div className="flex flex-col ml-3">
          <h2 className="font-bold text-primary text-xl mb-2 flex items-center">
            Dr. {name}
            <MdVerified
              className="text-accent ml-1"
              title="Doctors Document Verified"
            />
          </h2>
          <h6 className="text-sm font-normal mb-1">
            English, Luganda, Kiswahili
          </h6>
          <p className="text-accent text-sm font-medium capitalize">
            {speciality}
          </p>
          <Rating
            name="read-only"
            value={rating}
            precision={0.5}
            readOnly
            className="mt-5"
          />
        </div>
      </div>
      <div className="flex flex-col justify-start mr-20">
        <div className="flex text-primary items-center mb-1">
          <MdLocationOn className="text-2xl font-medium m-0 p-0 mr-1" />
          <h6 className="font-normal">
            {city} - {country}
          </h6>
        </div>
        <div className="flex text-primary items-center">
          <HiCreditCard className="text-xl font-medium m-0 p-0 mr-2" />
          <h6 className="font-medium">UGX 50,000</h6>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 mt-5">
          {!isSelected && (
            <button
              disabled
              onClick={() => navigate(`/dashboard/doctors/${doctor?._id}`)}
              className="py-2 px-4 w-full border border-solid border-primary rounded-md text-primary font-medium text-sm transition hover:bg-primary hover:text-white"
            >
              View Profile
            </button>
          )}
          {!isDoctor && (
            <button
              onClick={() => navigate("/appointment/booking")}
              className="py-2 px-4 border-none w-full rounded-md text-white text-sm font-medium transition bg-accent hover:bg-primary"
            >
              Book Appointment
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorCardDashboard;
