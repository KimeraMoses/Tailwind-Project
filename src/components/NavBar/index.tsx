import { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import {
  ChartBarIcon,
  MenuIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
// Components
import { NavBarComponent } from "./components/NavBarItem";
import { Logo } from "./components/Logo";
import { AuthNavComponents } from "./components/Auth";
import { AvatarComponent } from "./components/AvatarNavBarComponent";

import { SignOutButton } from "../Buttons";
import { Avatar } from "@mui/material";
import Notifications from "./../Notification/Notifications";
import { useCurrentUser } from "@hooks";

const REACT_APP_MEDATLAS_EMAIL = process.env.REACT_APP_MEDATLAS_EMAIL;

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

const home = [
  {
    name: "Home",
    href: "/",
    icon: ChartBarIcon,
  },
  {
    name: "Search Specialist",
    href: "/doctors",
    icon: ChartBarIcon,
  },
  /*
  { name: "Booking Steps", href: "#", icon: CursorClickIcon },
  {
    name: "Are you a Doctor or Patient",
    href: "#",
    icon: ShieldCheckIcon,
  },
  */
  {
    name: "Specialities",
    href: "/#specialities",
    icon: ViewGridIcon,
  },
];

const services = [
  {
    name: "Specialities",
    href: "/#specialities",
    icon: ChartBarIcon,
  },
];

const about = [
  {
    name: "Our History",
    href: "/about-us",
    icon: ChartBarIcon,
  },
  {
    name: "Our Services",
    href: "/#specialities",
    icon: ChartBarIcon,
  },
];
const patient = [
  {
    name: "Login",
    href: "/login?accountType=PATIENT",
    icon: ChartBarIcon,
  },
  {
    name: "Register",
    href: "/register?accountType=PATIENT",
    icon: ChartBarIcon,
  },
];
const doctor = [
  {
    name: "Login",
    href: "/login?accountType=DOCTOR",
    icon: ChartBarIcon,
  },
  {
    name: "Register",
    href: "/register?accountType=DOCTOR",
    icon: ChartBarIcon,
  },
  {
    name: "See Our Specialists",
    href: "/doctors",
    icon: ChartBarIcon,
  },
];

type NavBarLinkType = {
  link: string;
  target?: string;
};

const NavBarLink: React.FunctionComponent<NavBarLinkType> = ({
  link,
  children,
}) => {
  const style = `font-medium text-base  xl:text-xl md:text-md mr-3 hover:text-accent font-Poppins`;
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        style + (isActive ? ` text-accent` : " text-primary")
      }
    >
      {children}
    </NavLink>
  );
};

export const NavBar = () => {
  const user = useCurrentUser();
  const isPatient = user?.accountType === "PATIENT" ? true : false;

  return (
    <Popover className="sticky top-0  z-50 w-full h-primaryNavBar shadow bg-white  border-b border-gray ">
      <div className=" mx-auto px-4 xl:w-extra ">
        <div className=" flex justify-between items-center  py-6 md:space-x-10">
          <Logo />
          {!user ? (
            <>
              <div className="md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex gap-3 ">
                <NavBarLink link="/">Home</NavBarLink>
                <NavBarLink link="/about-us">About</NavBarLink>
                <NavBarLink link="/services">Services</NavBarLink>
                {!user && (
                  <>
                    {" "}
                    <NavBarComponent submenu={patient}>
                      Patients
                    </NavBarComponent>
                    <NavBarComponent submenu={doctor}>
                      Specialists
                    </NavBarComponent>
                  </>
                )}
                <NavBarLink link="/contact-us">Contact Us</NavBarLink>
              </Popover.Group>
            </>
          ) : (
            <div className="flex justify-center item-center font-light text-grayPrimary">
              <strong className="text-black font-semibold mr-1">Hi</strong>
              <strong className="font-semibold text-primary">
                {!isPatient ? "Dr. " : ""}
                {user?.firstName + " " + user?.lastName},
              </strong>
              Welcome Back
            </div>
          )}

          {user ? (
            <div className="flex items-center">
              <Notifications />
              <Link to="/dashboard/user">
                <Avatar
                  src={user?.profilePicture?.link}
                  alt={user?.firstName + " " + user?.lastName}
                />
              </Link>
            </div>
          ) : (
            <AuthNavComponents />
          )}

          {/* {isAuthenticated ? (
            <div className="flex items-center">
              <div className="hidden md:block">
                <NavBarLink link="/account">Account</NavBarLink>
              </div>
              <AvatarComponent />
            </div>
          ) : (
            <AuthNavComponents />
          )} */}
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <NavBarLink link="/">Home</NavBarLink>
                  <NavBarLink link="/about-us">About</NavBarLink>
                  <NavBarLink link="/#specialities">Services</NavBarLink>
                  <a
                    href={`mailto:${REACT_APP_MEDATLAS_EMAIL}`}
                    target="_blank"
                    className="font-medium xl:text-xl md:text-md"
                    rel="noreferrer"
                  >
                    Contact
                  </a>
                  {!user && (
                    <>
                      {" "}
                      <NavBarComponent submenu={patient}>
                        Patients
                      </NavBarComponent>
                      <NavBarComponent submenu={doctor}>
                        Doctors
                      </NavBarComponent>
                    </>
                  )}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5  gap-4">
              {user ? (
                <div className="flex justify-between items-center">
                  <AvatarComponent />
                  <SignOutButton />
                </div>
              ) : (
                <AuthNavComponents isMobile={true} />
              )}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
