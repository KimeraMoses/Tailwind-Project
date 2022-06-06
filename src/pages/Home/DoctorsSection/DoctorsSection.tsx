import React from "react";
import doctorsImage from "../../../assets/doctor-01.png";
import { Navigation } from "swiper";
import DoctorCard from "src/components/DoctorCard/DoctorCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSearchDoctors } from "@hooks";

export const DoctorsList = [
  {
    name: "Kimera Moses",
    speciality: "Fertility expert",
    city: "Kampala",
    country: "Uganda",
    image: doctorsImage,
    rating: 3.5,
  },
  {
    name: "Namugambi Cynthia",
    speciality: "Dentist",
    city: "Mulago",
    country: "Uganda",
    image: doctorsImage,
    rating: 5,
  },
  {
    name: "Mubiru Isaac",
    speciality: "Gynaecology",
    city: "Acra",
    country: "Ghana",
    image: doctorsImage,
    rating: 4.5,
  },
  {
    name: "Margret Mutumba",
    speciality: "Fertility expert",
    city: "Mwanza",
    country: "Tanzania",
    image: doctorsImage,
    rating: 2.5,
  },
  {
    name: "Nantale Becky",
    speciality: "Orthopaedic Specialist ",
    city: "Dodoma",
    country: "Tanzania",
    image: doctorsImage,
    rating: 3.5,
  },
  {
    name: "Omoding Ronald",
    speciality: "Physiotherapist",
    city: "Amuria",
    country: "Uganda",
    image: doctorsImage,
    rating: 5.0,
  },
  {
    name: "Efena Efetie",
    speciality: "Fertility Specialist",
    city: "Abuja",
    country: "Nigeria",
    image: doctorsImage,
    rating: 4.5,
  },
  {
    name: "Samuel Mutumba",
    speciality: "Physiotherapist",
    city: "Nailobi",
    country: "Kenya",
    image: doctorsImage,
    rating: 5,
  },
];

const DoctorsSection: React.FunctionComponent = () => {
  const doctorsList = useSearchDoctors({});
  console.log("doctors", doctorsList);

  return (
    <div className="w-full my-6 mb-10">
      <h2 className="text-4xl text-accent capitalize text-center mb-3 font-semibold font-Poppins select-none">
        Book Our Best Specialists
      </h2>

      <div className="flex justify-center  my-5 select-none mx-32">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          className="w-auto"
          style={{ padding: "0 20px" }}
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
                  rating={doctor.rating}
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
