import React from "react";
import { Link } from "react-router-dom";
import { DecoratedButton } from "../Buttons";

export const NewsLetterSection = () => {
  return (
    <div className="w-full bg-white py-4 text-center px-12">
      <div className="container flex items-center justify-around mx-auto">
        <div className="flex flex-col text-left">
          <h1 className="font-bold text-2xl text-primary capitalize">
            Sign up for the medAtlas newletter
          </h1>
          <p className="font-light text-sm text-grayPrimary">
            Sign up for our newsletter to stay up to date.
          </p>
        </div>
        <div className="flex flex-col text-left">
          <div className="w-full flex">
            <input
              className="shadow appearance-none border border-gray rounded py-2 w-9/12 px-3 text-gray-700 leading-tight focus:outline-primary focus:shadow-outline mr-2"
              placeholder="Enter your email"
            />
            <DecoratedButton color="accent" hoverColor="primary">
              Subscribe
            </DecoratedButton>
          </div>
          <p className="text-sm text-grayPrimary font-light mt-2">
            We care about the protection of your data. Read our{" "}
            <Link to="/privacy-policy" className="underline text-accent">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
