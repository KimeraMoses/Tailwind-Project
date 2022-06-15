import React from "react";
import { Navigation } from "swiper";
import DoctorCard from "src/components/DoctorCard/DoctorCard";
import { Swiper, SwiperSlide } from "swiper/react";

export const DoctorsList = [
  {
    name: "Mukasa Jane",
    speciality: "Physiotherapist",
    city: "Nairobi",
    country: "Kenya",
    image:
      "https://medatlas-production.s3.amazonaws.com/1647357377968-1647357378243.png",
    rating: 3.5,
  },
  {
    name: "Efena Efetie",
    speciality: "Fertility Specialist",
    city: "Lagos",
    country: "Nigeria",
    image:
      "https://medatlas-production.s3.amazonaws.com/1645704598098-1645704577940.png",
    rating: 5,
  },
  {
    name: "Muyingo Mark",
    speciality: "Fertility Specialist",
    city: "Kampala",
    country: "Uganda",
    image:
      "https://medatlas-production.s3.amazonaws.com/1644171764307-1644171745413.png",
    rating: 2.5,
  },
  {
    name: "Harriet (Hattie) Opondo",
    speciality: "Mental Health",
    city: "Chicago",
    country: "America",
    image:
      "https://medatlas-production.s3.amazonaws.com/1644003730013-1644003723532.png",
    rating: 3.5,
  },
  {
    name: "Namugambi Cynthia",
    speciality: "HIV Consultant",
    city: "Kampala",
    country: "Uganda",
    image:
      "https://medatlas-production.s3.amazonaws.com/1644130043005-1644130036988.png",
    rating: 5.0,
  },
];

const DoctorsSection: React.FunctionComponent = () => {
  return (
    <div className="w-full my-6 mb-10">
      <h2 className="text-4xl text-accent capitalize text-center mb-3 font-semibold font-body select-none">
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
          {DoctorsList &&
            DoctorsList.map((doctor) => {
              return (
                <SwiperSlide key={doctor?.name}>
                  <DoctorCard
                    name={doctor?.name}
                    speciality={doctor.speciality}
                    city={doctor?.city}
                    country={doctor?.country}
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
