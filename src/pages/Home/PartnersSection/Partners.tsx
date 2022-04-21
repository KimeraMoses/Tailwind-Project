import React from "react";
import Partner1 from "../../../assets/partners/1.png";
import Partner2 from "../../../assets/partners/2.png";
import Partner3 from "../../../assets/partners/3.png";
import Partner4 from "../../../assets/partners/4.png";
import Partner5 from "../../../assets/partners/5.png";
import Partner6 from "../../../assets/partners/6.png";
import Partner7 from "../../../assets/partners/7.png";
import Partner8 from "../../../assets/partners/8.png";
import Partner9 from "../../../assets/partners/9.png";

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
          <img src={Partner5} alt="" className="w-full" />
        </div>
        <div className="w-56 h-auto">
          <img src={Partner6} alt="" className="w-full" />
        </div>
        <div className="w-56 h-auto">
          <img src={Partner7} alt="" className="w-full" />
        </div>
        <div className="w-56 h-auto">
          <img src={Partner8} alt="" className="w-full" />
        </div>
        <div className="w-56 h-auto">
          <img src={Partner9} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
