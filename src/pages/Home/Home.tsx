import doctors from "src/assets/MedAtlasDoctors.png";
import { iconsCarousel } from "./CarouselIcon";
import { SpecialityList, LanguageList, CountryList } from "@constants";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
import { Footer } from "@components";
import { NewsLetterSection } from "src/components/NewsLetterSection";
import { InputField } from "src/components/InputField";
import "./Home.css";
import { useNavigate } from "react-router-dom";

// install Swiper modules
SwiperCore.use([Pagination]);

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="pd-10 bg-background">
      <header className=" bg-header bg-cover">
        <div className="w-full flex justify-center">
          <div
            className="hero_sectionn
         p-10  gap-5
         w-full
         flex
         justify-between
         md:justify-between md:items-center
        "
          >
            <div
              className="self-center   hidden md:flex md:flex-1 bg-cover bg-no-repeat bg-center w-full h-full md:flex-col justify-end rounded-b-md"
              style={{
                backgroundImage: `url(${doctors})`,
                backgroundPosition: 'center top',
              }}
            >
              <div className="hero_section p-4 rounded-md">
                <p className="text-primary font-extrabold text-3xl mb-2">
                  MedAtlas makes it easy to find Licensed Specialists Doctors
                  anywhere in Africa.
                </p>
                <p className="text-accent font-extrabold text-2xl">
                  Simply search, book and speak to a Specialist today!
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="w-450 p-8 mt-5 border bg-white border-gray rounded shadow flex flex-col gap-3">
                <div className="text-center">
                  <h1 className="text-xl text-accent font-bold capitalize ">
                    Search for doctors
                  </h1>
                  <h2 className="text-2xl text-primary font-semibold">
                    Book Appointments Today!
                  </h2>
                </div>
                <form className="mt-5" action="/doctors" method="GET">
                  <div className="flex flex-col gap-2 mb-6">
                    <label
                      htmlFor="type of doctor"
                      className="text-primary mb-1 font-semibold"
                    >
                      Type of Doctor
                    </label>
                    <InputField type="text" placeholder="E.g. Fertility" />
                  </div>
                  <div className="flex flex-col gap-2 mb-6">
                    <label
                      htmlFor="location"
                      className="text-primary mb-1 font-semibold"
                    >
                      Location
                    </label>
                    <InputField type="text" placeholder="E.g. Kampala" />
                  </div>
                  <div className="flex flex-col gap-2 mb-6">
                    <label
                      htmlFor="email"
                      className="text-primary mb-1 font-semibold"
                    >
                      Email Address
                    </label>
                    <InputField type="email" placeholder="name@gmail.com" />
                  </div>

                  {/* <label
                  htmlFor="speciality"
                  className="flex flex-col gap-2 text-lg text-primary"
                >
                  Speciality
                  <select
                    id="speciality"
                    name="speciality"
                    className="h-16 p-3 bg-white border border-gray rounded"
                  >
                    <option value="">Select a speciality</option>
                    {SpecialityList.map((speciality, index) => (
                      <option key={speciality.id} value={speciality.id}>
                        {speciality.name}
                      </option>
                    ))}
                  </select>
                </label> */}

                  {/* <div className="flex mt-5 justify-between">
                  <label
                    htmlFor="languages"
                    className=" flex flex-col gap-2 text-lg"
                  >
                    Language
                    <select
                      id="languages"
                      name="languages"
                      className="h-16 p-3 text-sm bg-white border border-gray rounded "
                    >
                      <option value="">Select a language</option>
                      {LanguageList.map((language, index) => (
                        <option key={language.id} value={language.id}>
                          {language.name}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label
                    htmlFor="country"
                    className="flex flex-col gap-2 text-lg w-40"
                  >
                    Location
                    <select
                      id="country"
                      name="country"
                      className="h-16 p-3 text-sm bg-white border border-gray rounded"
                    >
                      <option value="">Select a location</option>
                      {CountryList.map((country, index) => (
                        <option key={country.id} value={country.id}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div> */}
                  <div className="mt-10  ">
                    <button className="w-full shadow border border-gray rounded-md text-white font-medium p-4  transition bg-accent hover:bg-primary">
                      Book Doctor Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <section className="flex justify-center">
        <div
          className="
      p-4
      md:p-0
      md:-mt-8  
      w-full
      md:flex 
      justify-between
      gap-10
      xl:max-w-1140
      lg:max-w-960
      md:max-w-720
      sm:max-w-540
      "
        >
          <div
            className="
        relative
        flex
        justify-center
        items-center
        bg-primary
        border border-gray rounded-xl
        p-5
        text-white text-2xl 
        font-semibold
        h-48
        md:max-w-[33%]
        w-full
        md:mb-0
        mb-3
        "
          >
            Find and choose a specialist doctor
            <span className="absolute bottom-2 right-3 text-6xl font-semibold">
              1
            </span>
          </div>
          <div
            className="
         relative
         flex
         justify-center
         items-center
         bg-primary
         border border-gray rounded-xl
         p-5
         text-white text-2xl 
         font-semibold
         h-48
         md:max-w-[33%]
        w-full
        md:mb-0
        mb-3
         "
          >
            {" "}
            Book online appointment
            <span className="absolute bottom-2 right-3 text-6xl font-semibold">
              2
            </span>
          </div>
          <div
            className="
         relative
         flex
         justify-center
         items-center
         bg-primary
         border border-gray rounded-xl
         p-5
         text-white text-2xl 
         font-semibold
         h-48
        md:max-w-[33%]
        w-full
        md:mb-0
        mb-3
         "
          >
            {" "}
            Speak with specialist doctor
            <span className="absolute bottom-2 right-3 text-6xl font-semibold">
              3
            </span>
          </div>
        </div>
      </section> */}
      <div className="p-6 mt-12 md:mt-10 overflow-hidden ">
        <h1 className=" text-4xl  text-center text-primary font-[500]">
          Specialities
        </h1>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mt-14 h-60 w-142 "
        >
          {iconsCarousel.map((icon, index) => (
            <SwiperSlide
              key={index}
              className="cursor-pointer"
              onClick={() => navigate(`/${icon.icon.props.icon}`)}
            >
              {icon.icon}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <NewsLetterSection />
      <Footer />
    </div>
  );
};