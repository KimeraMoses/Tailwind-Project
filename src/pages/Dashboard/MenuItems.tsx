import { MdOutlineMenu } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { IoBagSharp } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";

export const PatientsMenuItems = [
  {
    name: "News Feeds",
    slug: "news-feeds",
    icon: <MdOutlineMenu className="text-2xl mr-2" />,
  },
  {
    name: "Search Doctors",
    slug: "search-doctors",
    icon: <BiSearch className="text-2xl mr-2" />,
  },
  {
    name: "Appointments",
    slug: "patients-appointments",
    icon: <IoBagSharp className="text-2xl mr-2" />,
  },
  {
    name: "Messages",
    slug: "messages",
    icon: <TiMessages className="text-2xl mr-2" />,
  },
  {
    name: "Profile Settings",
    slug: "profile-settings",
    icon: <FiSettings className="text-2xl mr-2" />,
  },
];
