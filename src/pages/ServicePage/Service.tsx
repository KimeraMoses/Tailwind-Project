import React from "react";
import ServiceImage from "../../assets/services.png";
import image1 from "../../assets/carousel/cardiologist.png";
import { Footer } from "./../../components/Footer/Footer";
import { DecoratedButton } from "./../../components/Buttons/ButtonDecorated";

const Service: React.FunctionComponent = () => {
  return (
    <>
      <div className="bg-background py-6 px-10">
        <h3 className="text-primary font-semibold text-3xl mb-5">Services</h3>

        <div className="flex flex-wrap">
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
        <div className="flex justify-center my-4">
          <DecoratedButton
            color="primary"
            hoverColor="accent"
            className="px-6 py-2"
            type="button"
          >
            Load More...
          </DecoratedButton>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
