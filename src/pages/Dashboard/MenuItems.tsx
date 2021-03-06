import { MdAddCircleOutline, MdOutlineMenu } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { IoBagSharp } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";
import { BsFillCalendarEventFill } from "react-icons/bs";

export const PatientsMenuItems = [
  {
    name: "News Feeds",
    slug: "user",
    icon: <MdOutlineMenu className="text-2xl mr-2" />,
  },
  {
    name: "Search Doctors",
    slug: "doctors",
    icon: <BiSearch className="text-2xl mr-2" />,
  },
  {
    name: "Appointments",
    slug: "appointments",
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

export const DoctorsMenuItems = [
  {
    name: "News Feeds",
    slug: "user",
    icon: <MdOutlineMenu className="text-2xl mr-2" />,
  },
  {
    name: "New Blog Post",
    slug: "new-blog-post",
    icon: <MdAddCircleOutline className="text-2xl mr-2" />,
  },
  {
    name: "Appointments",
    slug: "appointments",
    icon: <IoBagSharp className="text-2xl mr-2" />,
  },
  {
    name: "Messages",
    slug: "messages",
    icon: <TiMessages className="text-2xl mr-2" />,
  },
  {
    name: "Search Doctors",
    slug: "doctors",
    icon: <BiSearch className="text-2xl mr-2" />,
  },
  {
    name: "Scheduling",
    slug: "scheduling",
    icon: <BsFillCalendarEventFill className="text-2xl mr-2" />,
  },
  {
    name: "Profile Settings",
    slug: "profile-settings",
    icon: <FiSettings className="text-2xl mr-2" />,
  },
];
