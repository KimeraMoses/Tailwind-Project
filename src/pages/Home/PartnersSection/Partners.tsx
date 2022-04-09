import React from "react";
import Partner1 from "../../../assets/partners/concept-logo-1.png";
import Partner2 from "../../../assets/partners/Dar-logo.png";
import Partner3 from "../../../assets/partners/Sali-Hospital-logo.png";
import Partner4 from "../../../assets/partners/uwaterloo-logo.png";
import Partner5 from "../../../assets/partners/Vessel-is-Me-1.png";
import Partner6 from "../../../assets/partners/whi-logo.jpg";

const Partners = () => {
  return (
    <div className="w-full my-5">
      <h2 className="text-4xl text-primary capitalize text-center mb-3 font-semibold font-Poppins select-none">
        Our Partners
      </h2>

      <div className="flex justify-between gap-4 flex-wrap mt-5 p-8">
        <div className="w-56 h-auto">
          <img src={Partner1} alt="" className="w-full" />
        </div>
        <div className="w-56 h-auto">
          <img src={Partner2} alt="" className="w-full" />
        </div>
        <div className="w-56 h-auto">
          <img src={Partner3} alt="" className="w-full" />
        </div>
        <div className="w-56 h-auto">
          <img src={Partner4} alt="" className="w-full" />
        </div>
        <div className="w-56 h-auto">
          <img src={Partner6} alt="" className="w-full" />
        </div>
        <div className="w-56 h-auto">
          <img src={Partner5} alt="" className="w-full" />
        </div>

      </div>
    </div>
  );
};

export default Partners;
