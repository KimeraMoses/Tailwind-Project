import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export interface DoctorProps {
  image: any;
  name: string;
  speciality: string;
  city: string;
  country: string;
}

const DoctorCard = (props: DoctorProps) => {
  const navigate = useNavigate();
  const { image, name, speciality, city, country } = props;
  return (
    <div className="bg-white px-3 pt-1 pb-5 shadow-sm w-80 rounded-md">
      <div className="flex justify-center">
        <img src={image} alt="" className="w-48 h-48 shadow-md rounded-md" />
      </div>
      <div className="font-Poppins pt-4">
        <h2 className="font-bold text-primary text-xl">{name}</h2>
        <p className="text-accent text-sm font-medium">{speciality}</p>
        <div className="w-full">
          {/* <StarRatingComponent
                name="rate2"
                editing={false}
                starCount={10}
                value={8}
              /> */}
        </div>
        <div className="flex text-primary items-center">
          <MdOutlineLocationOn className="font-medium m-0 p-0" />
          <h6 className="font-normal ml-1">
            {city} - {country}
          </h6>
        </div>
        <div className="flex items-center justify-between gap-2 mt-5">
          <button className="py-2 px-4 border border-solid border-primary rounded-md text-primary font-medium text-sm transition hover:bg-primary hover:text-white">
            View Profile
          </button>
          <button
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
