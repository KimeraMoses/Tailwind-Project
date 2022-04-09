import React from "react";
import doctorsImage from "../../../assets/doctor-01.png";
import DoctorCard from "src/components/DoctorCard/DoctorCard";

const DoctorsSection = () => {
  return (
    <div className="w-full my-6 mb-10">
      <h2 className="text-4xl text-accent capitalize text-center mb-3 font-semibold font-Poppins select-none">
        Book Our Best Doctors
      </h2>

      <div className="flex justify-center gap-4 my-5 select-none">
          
        <DoctorCard
          name="Dr. Kimera Moses"
          speciality="Fertility expert"
          city="Kampala"
          country="Uganda"
          image={doctorsImage}
        />
        <DoctorCard
          name="Dr. Namugambi Cynthia"
          speciality="Dentist"
          city="Mulago"
          country="Uganda"
          image={doctorsImage}
        />
        <DoctorCard
          name="Dr. Mubiru Isaac"
          speciality="Gynaecology"
          city="Acra"
          country="Ghana"
          image={doctorsImage}
        />
      
      </div>
    </div>
  );
};

export default DoctorsSection;
