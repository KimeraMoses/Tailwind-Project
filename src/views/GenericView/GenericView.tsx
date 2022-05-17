import React from "react";
import logo from "@assets/medatlas_logo.png";
import { Footer } from "@components";
import Image from "@assets/genericViewBaner.png";

export const GenericView: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <div className="min-h-screen p-10 flex relative bg-header bg-cover items-center">
        <div className="flex-grow align-bottom">
          <div className="flex items-end justify-center">
            <img src={Image} alt="MedAtlas" />
          </div>
        </div>
        <div
          className="
        w-80
        p-5
        bg-white
        flex
        flex-col
        items-center
        justify-center
        gap-5
        rounded-2xl
        shadow-md
        md:w-128
      "
        >
          <img src={logo} className="w-52"></img>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};
