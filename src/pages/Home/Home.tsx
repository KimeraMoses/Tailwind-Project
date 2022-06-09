import doctors from "src/assets/MedAtlasDoctors.png";
import { iconsCarousel } from "./CarouselIcon";
import { SpecialityList } from "@constants";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Footer, SpecialityButton } from "@components";
import { NewsLetterSection } from "src/components/NewsLetterSection";
import { InputField } from "src/components/InputField";
import DropdownInputField from "src/components/DropdownInputField/DropdownInputField";
import { useState } from "react";
import DoctorsSection from "./DoctorsSection/DoctorsSection";
import Partners from "./PartnersSection/Partners";
import BlogSection from "./BlogSection/BlogSection";
import ChooseUs from "./ChooseUs/ChooseUs";
import FeatureCard from "../../components/FeatureCard/FeatureCard";

// install Swiper modules
SwiperCore.use([Pagination]);

export const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [selectedType, setSelectedType] = useState("");
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({
    doctorType: "",
    location: "",
    language: "",
    email: "",
  });

  const keyWordHandler = (e: any) => {
    setShow(false);
    const { value } = e.target;
    setSearchTerm(value);

    if (searchTerm !== "") {
      const Results = SpecialityList.filter((Result: any) => {
        return Object.values(Result)
          .join(" ")
          .replace(/-/g, " ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(Results);
    }
  };

  const selectedItemHandler = (result: any) => {
    setValues({ ...values, doctorType: result.name });
    setSelectedType(result.name);
    setSearchTerm("");
    setShow(true);
  };

  const handleOnChange = (event: any) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="bg-background">
      <header className=" bg-header bg-cover">
        <div className="w-full flex justify-center items-center px-20">
          <div className="self-center w-2/3 flex h-full flex-col justify-endd rounded-b-md px-10">
            <img src={doctors} alt="" className="w-full h-auto" />
            <div className="bg-[#F7FAFE] p-4 rounded-md -mt-52 w-auto">
              <p className="text-primary font-bold text-3xl mb-2">
                MedAtlas makes it easy to find Licensed Specialists Doctors
                anywhere in Africa.
              </p>
              <p className="text-accent font-extrabold text-2xl">
                Simply search, book and speak to a Specialist today!
              </p>
            </div>
          </div>

          <div className="flex justify-end w-1/3">
            <div className="py-5 mt-5 border bg-white border-gray rounded shadow px-5">
              <div className="text-center w-full ">
                <h1 className="text-xl text-accent font-bold capitalize mb-3">
                  Search for doctors
                </h1>
                <h2 className="text-2xl text-primary font-semibold mb-5">
                  Book Appointments Today!
                </h2>
              </div>
              <form className="mt-2" action="/doctors" method="GET">
                <div className="flex flex-col gap-2 mb-4">
                  <label
                    htmlFor="type of doctor"
                    className="text-primary mb-1 font-semibold"
                  >
                    Type of Doctor
                  </label>
                  <DropdownInputField
                    placeholder="E.g. Fertility"
                    selectedItem={selectedType}
                    keyWordHandler={keyWordHandler}
                    searchTerm={searchTerm}
                    searchResults={searchResults}
                    isSelected={show}
                    itemClickHandler={selectedItemHandler}
                  />
                </div>
                <div className="flex flex-col gap-2 mb-4">
                  <label
                    htmlFor="location"
                    className="text-primary mb-1 font-semibold"
                  >
                    Location
                  </label>
                  <InputField
                    disabled={false}
                    type="text"
                    placeholder="E.g. City or Country"
                    name="location"
                    value={values.location}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="flex flex-col gap-2 mb-4">
                  <label
                    htmlFor="language"
                    className="text-primary mb-1 font-semibold"
                  >
                    Language
                  </label>
                  <InputField
                    disabled={false}
                    type="text"
                    placeholder="E.g. Kiswahili"
                    name="Language"
                    value={values.language}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="flex flex-col gap-2 mb-4">
                  <label
                    htmlFor="email"
                    className="text-primary mb-1 font-semibold"
                  >
                    Email Address
                  </label>
                  <InputField
                    disabled={false}
                    type="email"
                    placeholder="name@gmail.com"
                    name="email"
                    value={values.email}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="mt-8 mx-5">
                  <button className="w-full shadow border border-gray rounded-md text-white font-medium p-4 py-2  transition bg-accent hover:bg-primary">
                    Book Doctor Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full p-5 my-3 px-20 mb-4">
          <div className="flex justify-between items-center">
            <FeatureCard feature="Secure Payments" color="primary" />
            <FeatureCard feature="Certified Specialists" color="accent" />
            <FeatureCard feature="Online or In-person" color="primary" />
            <FeatureCard feature="Secure and Confidential" color="accent" />
          </div>
        </div>
      </header>

      <div className="p-6 mt-12 md:mt-10 overflow-hidden mx-20">
        <h1 className=" text-4xl  text-center text-primary font-semibold">
          Specialities
        </h1>
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          style={{ padding: "0 20px" }}
          className="mt-14 h-60 w-auto"
        >
          {iconsCarousel.map((icon, index) => (
            <SwiperSlide key={index} className="cursor-pointer">
              {icon.icon}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <ChooseUs />
      <DoctorsSection />
      {/* <BlogSection /> */}
      <SpecialityButton />
      <Partners />
      <NewsLetterSection />
      <Footer />
    </div>
  );
};
