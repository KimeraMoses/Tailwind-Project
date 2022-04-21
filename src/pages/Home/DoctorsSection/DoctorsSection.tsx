import React, { useEffect, useState } from "react";
import doctorsImage from "../../../assets/doctor-01.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import DoctorCard from "src/components/DoctorCard/DoctorCard";
import { Swiper, SwiperSlide } from "swiper/react";

// import { useSearchDoctors } from "@hooks";
// import { doctors } from "src/assets/MedAtlasDoctors.png";

const DoctorsList = [
  {
    name: "Dr. Kimera Moses",
    speciality: "Fertility expert",
    city: "Kampala",
    country: "Uganda",
    image: doctorsImage,
  },
  {
    name: "Dr. Namugambi Cynthia",
    speciality: "Dentist",
    city: "Mulago",
    country: "Uganda",
    image: doctorsImage,
  },
  {
    name: "Dr. Mubiru Isaac",
    speciality: "Gynaecology",
    city: "Acra",
    country: "Ghana",
    image: doctorsImage,
  },
  {
    name: "Dr. Kimera Moses",
    speciality: "Fertility expert",
    city: "Kampala",
    country: "Uganda",
    image: doctorsImage,
  },
  {
    name: "Dr. Namugambi Cynthia",
    speciality: "Dentist",
    city: "Mulago",
    country: "Uganda",
    image: doctorsImage,
  },
  {
    name: "Dr. Mubiru Isaac",
    speciality: "Gynaecology",
    city: "Acra",
    country: "Ghana",
    image: doctorsImage,
  },
];

const DoctorsSection = () => {
  // const doctorsList = useSearchDoctors({});
  // console.log("doctors", doctorsList);
  // const swiper = useSwiper();

  return (
    <div className="w-full my-6 mb-10">
      <h2 className="text-4xl text-accent capitalize text-center mb-3 font-semibold font-Poppins select-none">
        Book Our Best Doctors
      </h2>

      <div className="flex justify-center  my-5 select-none mx-40">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={3}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="container flex justify-center mx-40"
        >
          {DoctorsList.map((doctor) => {
            return (
              <SwiperSlide key={doctor.name}>
                <DoctorCard
                  name={doctor.name}
                  speciality={doctor.speciality}
                  city={doctor.city}
                  country={doctor.country}
                  image={doctor.image}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default DoctorsSection;
