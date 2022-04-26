import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { DoctorsList } from "./../../pages/Home/DoctorsSection/DoctorsSection";
import DoctorCardDashboard from "./DoctorCardDashboard";

const DoctorDetails = () => {
  const { doctorName } = useParams();
  const navigate = useNavigate();

  const SelectedDoctor = DoctorsList.filter(
    (dr) => dr.name.toLowerCase().replace(/ /g, "-") === doctorName
  )[0];

  return (
    <div className="w-full">
      <div className="flex items-center">
        <MdOutlineArrowBackIosNew
          className="text-primary text-xl mb-5 cursor-pointer"
          onClick={() => navigate(`/dashboard/search-doctors`)}
        />
        <h3 className="text-primary font-semibold text-2xl mb-5">
          Doctor's Profile
        </h3>
      </div>
      <div className="w-full bg-white rounded-t-md">
        <DoctorCardDashboard
          name={SelectedDoctor && SelectedDoctor.name}
          image={SelectedDoctor && SelectedDoctor.image}
          speciality={SelectedDoctor && SelectedDoctor.speciality}
          city={SelectedDoctor && SelectedDoctor.city}
          country={SelectedDoctor && SelectedDoctor.country}
          rating={SelectedDoctor && SelectedDoctor.rating}
          isSelected={true}
        />
        <div className="mt-5 p-3">
          <h4>About Me</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
