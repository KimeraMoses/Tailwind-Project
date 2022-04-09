import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Facebook } from "@assets/socialMedia/facebook.svg";
import { ReactComponent as Instagram } from "@assets/socialMedia/instagram.svg";
import { ReactComponent as Linkedin } from "@assets/socialMedia/linkedin.svg";
import { ReactComponent as Twitter } from "@assets/socialMedia/twitter.svg";
import {
  MdDoubleArrow,
  MdOutlineMail,
  MdOutlinePhone,
  MdOutlineLocationOn,
} from "react-icons/md";
import { AccountTypes } from "@interface/enum";
import { socialMedia } from "src/constants/socialMedia";

interface ItemProps {
  title: string;
  itemLink: string;
}

export const Footer = () => {
  const getCurrentYear = new Date().getFullYear();

  const ListItem = ({ title, itemLink }: ItemProps) => {
    return (
      <li className="flex items-center transition hover:translate-x-1 hover:text-accent">
        <MdDoubleArrow className="mr-1" />
        <Link to={`${itemLink}`}>{title}</Link>
      </li>
    );
  };
  return (
    <div className="bg-primary p-4 flex items-center flex-col">
      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-0 items-start md:justify-between text-white p-5">
        {/*---------- About Us -------------*/}
        <section className="flex flex-col gap-3 leading-6 text-white basis-1/4 pr-4">
          <h1 className="text-xl  font-semibold">About Us</h1>
          <p className="text-white font-light">
            MedAtlas makes it easy for you to connect with Licensed Specialist
            Doctors from anywhere in Africa.
          </p>
          <p>Simply search for a specialist and book your appointment today!</p>
        </section>
        {/*---------- For Patients -------------*/}
        <section className=" leading-6 text-white flex flex-col gap-3 basis-1/4">
          <h1 className="text-xl  font-semibold">For Patients</h1>
          <ul className=" flex flex-col gap-2 list-none font-light list-inside">
            <ListItem itemLink="/doctors" title="Search for Doctors" />
            <ListItem
              itemLink={`/login?accountType=${AccountTypes.PATIENT}`}
              title="Login"
            />
            <ListItem
              itemLink={`/register?accountType=${AccountTypes.PATIENT}`}
              title="Register"
            />
            <ListItem itemLink="/account" title="Patient Dashboard" />
          </ul>
        </section>
        {/*---------- For Doctors -------------*/}
        <section className="leading-6 text-white flex flex-col gap-3 basis-1/4">
          <h1 className="text-xl  font-semibold">For Doctors</h1>
          <ul className="flex flex-col gap-2 list-none font-light list-inside">
            <ListItem itemLink="appointments" title="Appointments" />
            <ListItem
              itemLink={`/login?accountType=${AccountTypes.DOCTOR}`}
              title="Login"
            />
            <ListItem
              itemLink={`/register?accountType=${AccountTypes.DOCTOR}`}
              title="Doctor Dashboard"
            />

            <ListItem itemLink="/account" title="Doctor Dashboard" />
          </ul>
        </section>
        {/*---------- Contact Us -------------*/}
        <section className="text-white flex flex-col gap-3 basis-1/4">
          <h1 className="text-xl  font-semibold">Contact Us</h1>
          <ul className="flex flex-col gap-2 font-light">
            <li className="flex gap-2 items-center">
              <MdOutlineLocationOn className="w-5 h-5" /> Canada Hub, Waterloo ON. 
            </li>
            <li className="flex gap-2 items-center">
              <MdOutlineLocationOn className="w-5 h-5" /> Africa Hub, Kampala, Uganda
            </li>

            <a
              href={`mailto:${process.env.REACT_APP_MEDATLAS_EMAIL}`}
              className="hover:text-accent"
            >
              <li className="flex items-center gap-2">
                <MdOutlineMail className="w-4 h-4" />
                {process.env.REACT_APP_MEDATLAS_EMAIL}
              </li>
            </a>
            <a
              href={`tel:${process.env.REACT_APP_MEDATLAS_PHONE_NUMBER}`}
              className="hover:text-accent"
            >
              <li className="flex items-center gap-2">
                <MdOutlinePhone className="w-4 h-4" />
                {process.env.REACT_APP_MEDATLAS_PHONE_NUMBER}
              </li>
            </a>
          </ul>
        </section>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-center md:justify-between text-white border-t border-whitePrimary mt-4 p-5">
        <div className="">
          <p>© {getCurrentYear} MedAtlas Care Inc. All rights reserved.</p>
        </div>
        <div className="">
          <div className="flex gap-3 justify-center">
            <a
              rel="noreferrer"
              target="_blank"
              href={socialMedia.facebook}
              className="transition hover:text-accent"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a
              rel="noreferrer"
              target="_blank"
              href={socialMedia.twitter}
              className="transition hover:text-accent"
            >
              <Twitter className="w-4 h-4 " />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href={socialMedia.linkedin}
              className="transition hover:text-accent"
            >
              <Linkedin className="w-4 h-4 " />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href={socialMedia.instagram}
              className="transition hover:text-accent"
            >
              <Instagram className="w-4 h-4 " />
            </a>
          </div>
        </div>
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
    </div>
  );
};
