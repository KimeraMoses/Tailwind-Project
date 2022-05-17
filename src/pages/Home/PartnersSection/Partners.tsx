import React from "react";
import Partner1 from "../../../assets/partners/1.jpg";
import Partner2 from "../../../assets/partners/2.jpg";
import Partner3 from "../../../assets/partners/3.jpg";
import Partner4 from "../../../assets/partners/4.jpg";
import Partner5 from "../../../assets/partners/5.jpg";
import Partner6 from "../../../assets/partners/6.jpg";
import Partner7 from "../../../assets/partners/7.jpg";
import Partner8 from "../../../assets/partners/8.jpg";
import Partner9 from "../../../assets/partners/9.jpg";
import Partner10 from "../../../assets/partners/10.jpg";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

const partnersData = [
  {
    name: "Neogenesis fertility center",
    logo: Partner1,
  },
  {
    name: "Women's Hospital",
    logo: Partner2,
  },
  {
    name: "Lusaka IVF and Fertitlity clinic",
    logo: Partner3,
  },
  {
    name: "Vesel in Me",
    logo: Partner4,
  },
  {
    name: "DAR IVF & Fertility Clinic",
    logo: Partner5,
  },
  {
    name: "University of WaterLoo",
    logo: Partner6,
  },
  {
    name: "Concept",
    logo: Partner7,
  },
  {
    name: "Dote Medical & IVF Center",
    logo: Partner8,
  },
  {
    name: "Joyce Fertility Surport Center Uganda",
    logo: Partner9,
  },
  {
    name: "Joyce Fertility Surport Center Uganda",
    logo: Partner10,
  },
];

const Partners: React.FunctionComponent = () => {
  return (
    <div className="w-full my-5">
      <h2 className="text-4xl text-primary capitalize text-center mb-3 font-semibold font-Poppins select-none">
        Our Partners
      </h2>

      <div className="flex justify-between gap-4 flex-wrap mt-5 p-8">
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          className="h-48 container"
        >
          {partnersData.map((item) => (
            <SwiperSlide key={item.name} className="cursor-pointer">
              <div className="w-56 h-auto mx-4">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="rounded-md w-36"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;
