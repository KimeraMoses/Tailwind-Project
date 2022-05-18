import React from "react";
import { Link } from "react-router-dom";
import SocialHandles from "./../SocialHandles/SocialHandles";

const CopyRight: React.FC<{ isContactPage?: boolean }> = ({
  isContactPage,
}) => {
  const getCurrentYear = new Date().getFullYear();

  return (
    <div
      className={`w-full bg-primary flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-center md:justify-between text-white p-5 px-8 ${
        isContactPage
          ? "border-t-2 border-white"
          : "border-t border-whitePrimary mt-2"
      }`}
    >
      <div className="">
        <p>© {getCurrentYear} MedAtlas Care Inc. All rights reserved.</p>
      </div>
      {!isContactPage && (
        <div className="">
          <SocialHandles />
        </div>
      )}
      <div className="flex gap-4 font-light">
        <Link
          target="_blank"
          to="/terms-conditions"
          className="transition hover:text-accent"
        >
          Terms and Conditions
        </Link>
        |
        <Link
          target="_blank"
          to="/privacy-policy"
          className=" transition hover:text-accent"
        >
          Policy
        </Link>
      </div>
    </div>
  );
};

export default CopyRight;
