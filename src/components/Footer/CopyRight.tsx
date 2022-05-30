import React from "react";
import { Link, NavLink } from "react-router-dom";
import SocialHandles from "./../SocialHandles/SocialHandles";

export const getCurrentYear = new Date().getFullYear();

const CopyRight: React.FC<{ isContactPage?: boolean }> = ({
  isContactPage,
}) => {
  const style = `hover:text-accent`;

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
        <NavLink
          to="/terms-conditions"
          className={({ isActive }) =>
            style + (isActive ? ` text-accent font-medium` : " text-white")
          }
        >
          Terms and Conditions
        </NavLink>
        |
        <NavLink
          to="/privacy-policy"
          className={({ isActive }) =>
            style + (isActive ? ` text-accent font-medium` : " text-white")
          }
        >
          Policy
        </NavLink>
      </div>
    </div>
  );
};

export default CopyRight;
