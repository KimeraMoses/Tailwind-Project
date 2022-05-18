import React from "react";
import { DecoratedButton } from "../Buttons";

export const NewsLetterSection: React.FunctionComponent = () => {
  return (
    <div className="w-full text-center mx-auto px-44 py-10">
      <div className="flex items-center shadow-lg rounded-md select-none">
        <div className="bg-accent font-bold text-xl text-white w-1/2 p-2 h-12 rounded-l-md flex items-center justify-center">
          Sign Up For The MedAtlas Newsletter
        </div>
        <div className="flex w-1/2 items-center h-12">
          <div className="bg-white w-3/4 h-full">
            <input
              className="appearance-none w-full h-full p-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
          </div>
          <div className="h-full w-3/12 flex items-center">
            <DecoratedButton
              color="primary"
              hoverColor="accent"
              className="w-full rounded-l-0 rounded-r-md"
            >
              Subscribe
            </DecoratedButton>
          </div>
        </div>
      </div>
    </div>
  );
};
