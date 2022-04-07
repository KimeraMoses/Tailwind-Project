import React from "react";
import logo from "@assets/medatlas_logo.png";

export const GenericView: React.FunctionComponent = ({ children }) => {
  return (
    <div className="min-h-screen p-10 flex justify-center items-center relative bg-authFlow bg-cover ">
      <div
        className="
        w-80
        p-6
        bg-white
        flex
        flex-col
        items-center
        justify-center
        gap-5
        rounded-3xl
        shadow-md
        md:w-132
      "
      >
        <img src={logo}></img>
        {children}
      </div>
    </div>
  );
};
