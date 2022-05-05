import { DashBoardSideBar, DashboardView } from "@views";
import React from "react";
import MHFS from "../../assets/MHFS.png";
import { MdOutlineHelpOutline } from "react-icons/md";

import { NavLink, Outlet } from "react-router-dom";
import { DoctorsMenuItems, PatientsMenuItems } from "./MenuItems";

interface MenuProps {
  menuTitle: string;
  menuIcon: JSX.Element;
  menuLink: string;
}

const DashboardMenuItem = (props: MenuProps) => {
  const { menuTitle, menuIcon, menuLink } = props;

  const linkStyles = `text-primary flex items-center py-2 px-5 font-semibold rounded-lg mt-2 capitalize select-none`;
  const activeLinkStyles = `bg-accentHover text-white flex items-center py-2 px-5 font-medium rounded-lg mt-2 capitalize select-none`;

  return (
    <NavLink
      className={({ isActive }) => (isActive ? activeLinkStyles : linkStyles)}
      to={`/dashboard/${menuLink}`}
      end
    >
      {menuIcon} {menuTitle}
    </NavLink>
  );
};

const DashboardLayout = () => {
  return (
    <div className="relative ">
      <div className="flex bg-background">
        <div className="hidden max-w-sideBar xl:min-w-sideBar sticky pb-4 md:flex flex-col  justify-between top-navbarsOffset bg-backgroundSidebar text-white  h-sideBarHeight  shadow">
          <div className="text-primary pt-6 mx-5">
            {PatientsMenuItems.map((menuItem) => {
              return (
                <DashboardMenuItem
                  key={menuItem.slug}
                  menuTitle={menuItem.name}
                  menuLink={menuItem.slug}
                  menuIcon={menuItem.icon}
                />
              );
            })}
            {/* {DoctorsMenuItems.map((menuItem) => {
              return (
                <DashboardMenuItem
                  key={menuItem.slug}
                  menuTitle={menuItem.name}
                  menuLink={menuItem.slug}
                  menuIcon={menuItem.icon}
                />
              );
            })} */}
          </div>
          <div className="flex flex-col justify-center items-center mt-4 mx-auto text-center">
            <img src={MHFS} alt="MedAtlas Health Finance Scheme" className="" />
            <h4 className="text-black text-center select-none text-base hover:text-accentHover cursor-pointer">
              MedAtlas Health <br />
              Finance Scheme
            </h4>
          </div>
          <div className="text-center mx-5 -mt-5 mb-3 select-none">
            <NavLink
              className={({ isActive }) =>
                `flex items-center justify-center px-5 py-2 border border-accent text-primary font-semibold rounded-lg capitalize` +
                (isActive && ` bg-accentHover text-white font-medium`)
              }
              to={`/help-center`}
              end
            >
              <MdOutlineHelpOutline className="text-2xl mr-2" />
              Help
            </NavLink>
          </div>
        </div>
        <div className="py-4 px-4 flex-grow overflow-hidden ">
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
