import React from "react";
import ServiceImage from "../../assets/services.png";
import image1 from "../../assets/carousel/cardiologist.png";
import { Footer } from "./../../components/Footer/Footer";

const Service = () => {
  return (
    <>
      <div className="bg-background pt-6 px-10">
        <h3 className="text-primary font-semibold text-3xl mb-5">Services</h3>
        <div className="w-full py-5 flex px-10">
          <img src={ServiceImage} alt="" className="w-128 rounded" />
          {/* <div className="">Cadiologist</div> */}
        </div>
        <div className="py-5 flex flex-wrap">
          <div className="w-1/2 p-4">
            <div className="bg-white rounded-md shadow-md flex p-2">
              <div className="mr-1 rounded-full w-56">
                <img src={image1} alt="" className="w-48" />
              </div>
              <div className="">
                <h6 className="text-primary text-md font-bold">Cardiologist</h6>
                <p className="text-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 p-4">
            <div className="bg-white rounded-md shadow-md flex p-2">
              <div className="mr-1 rounded-full w-56">
                <img src={image1} alt="" className="w-48" />
              </div>
              <div className="">
                <h6 className="text-primary text-md font-bold">Cardiologist</h6>
                <p className="text-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 p-4">
            <div className="bg-white rounded-md shadow-md flex p-2">
              <div className="mr-1 rounded-full w-56">
                <img src={image1} alt="" className="w-48" />
              </div>
              <div className="">
                <h6 className="text-primary text-md font-bold">Cardiologist</h6>
                <p className="text-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 p-4">
            <div className="bg-white rounded-md shadow-md flex p-2">
              <div className="mr-1 rounded-full w-56">
                <img src={image1} alt="" className="w-48" />
              </div>
              <div className="">
                <h6 className="text-primary text-md font-bold">Cardiologist</h6>
                <p className="text-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
