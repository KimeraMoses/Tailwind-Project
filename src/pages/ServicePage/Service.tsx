import React from "react";
import ServiceImage from "../../assets/services.png";
import image1 from "../../assets/carousel/cardiologist.png";

const Service = () => {
  return (
    <div className="bg-background pt-6 h-full px-8">
      <h3 className="text-primary font-semibold text-2xl mb-5">Services</h3>
      <div className="w-full py-5 flex justify-between px-8">
        <img src={ServiceImage} alt="" className="w-128 rounded" />
        <div className="">Cadiologist</div>
      </div>
      <div className="py-5 flex gap-4 px-20">
        <div className="flex p-3 bg-white rounded shadow-md">
          <div className="mr-1 w-36 h-36">
            <img src={image1} alt="" className="rounded-full " />
          </div>
          <div className="">
            <h6 className="text-primary text-md font-bold">Cardiologist</h6>
            <p className="text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad
            </p>
          </div>
        </div>
        <div className="flex p-3 bg-white rounded shadow-md">
          <div className="mr-1">
            <img src={image1} alt="" className="rounded-full w-36 h-36" />
          </div>
          <div className="">
            <h6 className="text-primary text-md font-bold">Cardiologist</h6>
            <p className="text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
