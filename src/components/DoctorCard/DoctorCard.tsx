import React from "react";
import { MdLocationOn, MdVerified } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";

export interface DoctorProps {
  image: any;
  name: string | undefined;
  speciality: string | undefined;
  city: string | undefined;
  country: string | undefined;
  rating?: number;
  isSelected?: boolean;
  isDoctor?: boolean;
  doctor?: any;
}

const DoctorCard: React.FC<DoctorProps> = ({
  image,
  name,
  speciality,
  doctor,
  city,
  country,
  rating,
}) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white px-3 pt-1 pb-5 shadow-sm rounded-md">
      <div className="flex justify-center">
        <img src={image} alt="" className="w-48 h-48 shadow-md rounded-md" />
      </div>
      <div className="font-body pt-4">
        <h2 className="font-bold text-primary text-xl mb-2 flex items-center">
          Dr. {name}
          <MdVerified
            className="text-accent ml-1"
            title="Doctors Document Verified"
          />
        </h2>
        <p className="text-accent text-sm font-medium capitalize">
          {speciality}
        </p>
        <div className="w-full py-1">
          <Rating name="read-only" value={rating} precision={0.5} readOnly />
        </div>
        <div className="flex text-primary items-center">
          <MdLocationOn className="font-medium m-0 p-0" />
          <h6 className="font-normal ml-1">
            {city} - {country}
          </h6>
        </div>
        <div className="flex items-center justify-between gap-2 mt-5">
          <button
            disabled
            onClick={() => navigate(`/dashboard/doctors/${doctor?._id}`)}
            className="py-2 px-4 border border-solid border-primary rounded-md text-primary font-medium text-sm transition hover:bg-primary hover:text-white"
          >
            View Profile
          </button>
          <button
            disabled
            onClick={() => navigate("/appointment/booking")}
            className="py-2 px-4 border-none rounded-md text-white text-sm font-medium transition bg-accent hover:bg-primary"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
