import React from "react";
import logo from "@assets/medatlas_logo.png";
import { ReactComponent as Facebook } from "@assets/socialMedia/facebook.svg";
import { ReactComponent as Instagram } from "@assets/socialMedia/instagram.svg";
import { ReactComponent as Linkedin } from "@assets/socialMedia/linkedin.svg";
import { ReactComponent as Twitter } from "@assets/socialMedia/twitter.svg";
import { MdOutlineMail, MdOutlineLocationOn } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { socialMedia } from "./../../constants/socialMedia";
import ContactForm from "./../../components/ContactForm/ContactForm";
import CopyRight from "./../../components/Footer/CopyRight";
import SocialHandles from "./../../components/SocialHandles/SocialHandles";
import map from "@assets/map.png";
import { Link } from "react-router-dom";

const ContactUs: React.FunctionComponent = () => {
  return (
    <>
      <div className="min-h-screen p-14 flex relative bg-header bg-cover items-center">
        <div className="flex-grow align-bottom px-14">
          <img src={map} alt="MedAtlas Map" className="w-full h-auto" />
          <div className=" bg-primary p-9 text-white rounded">
            <h4 className="font-semibold text-3xl text-center mb-8">
              Contact Us
            </h4>
            <div className="text-left mb-8">
              <ul className="flex flex-col gap-2 font-light">
                <li className="flex gap-2 items-center">
                  <MdOutlineLocationOn className="w-5 h-5" /> Canada Hub -
                  Columbia Street West, Waterloo, ON. Canada
                </li>
                <li className="flex gap-2 items-center">
                  <MdOutlineLocationOn className="w-5 h-5" /> Africa Hub -
                  Bukoto-Kisaasi Road, Kampala, Uganda
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
                    <RiWhatsappFill className="text-[#25D366]" />
                    {process.env.REACT_APP_MEDATLAS_PHONE_NUMBER}
                  </li>
                </a>
              </ul>
            </div>
            <SocialHandles />
          </div>
        </div>
        <div className="w-80  md:w-128 flex flex-col item-center justify-center">
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
            <h4 className="text-primary text-2xl font-semibold text-center">
              Send Us A Message
            </h4>
            <ContactForm />
          </div>
          <div className="w-full text-center py-10 flex justify-center mt-6 px-3">
            <div className="flex items-center shadow-md select-none w-full">
              <div className="border border-accent font-bold text-base text-accent w-1/2 h-12 rounded-l-md flex items-center justify-center">
                MedAtlas Help Center?
              </div>
              <Link
                to="/help-center"
                className="flex items-center justify-center font-bold text-base  w-1/2 h-12 bg-primary text-white rounded-r-md cursor-pointer"
              >
                Click Here
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-1 bg-primary"></div>
      <CopyRight isContactPage />
    </>
  );
};

export default ContactUs;
