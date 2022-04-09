import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/bkgrd-authflow.jpeg";
import { FaClock } from "react-icons/fa";

const BlogSection = () => {
  return (
    <div className="w-full my-6">
      <h2 className="text-4xl text-primary text-center mb-3 font-semibold font-Poppins select-none">
        Blogs and News
      </h2>
      <div className="flex justify-center gap-4 my-8 select-none">
        <div className="bg-white p-5 shadow-sm w-96 rounded-md">
          <div className="flex justify-center">
            <img
              src={image}
              alt=""
              className="w-80 h-64 shadow-md rounded-md"
            />
          </div>
          <div className="font-Poppins pt-4">
            <h3 className="text-sm font-Poppins font-medium text-primary">
              University of Waterloo, Canada
            </h3>
            <div className="flex items-center text-primary my-1">
              <FaClock />
              <h6 className="text-xs font-normal ml-1">6 Jan 2022</h6>
            </div>
            <div className="text-primary my-2">
              <h2 className="font-bold text-lg">
                <Link to="/" className="hover:text-accent">
                  The future of Specialist care in Africa
                </Link>
              </h2>
              <p className="font-light text-sm">
                Read how she founded MedAtlas, a telemedicine health-care
                platform to make fertility care in Africa more accessible.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-5 shadow-sm w-96 rounded-md">
          <div className="flex justify-center">
            <img
              src={image}
              alt=""
              className="w-80 h-64 shadow-md rounded-md"
            />
          </div>
          <div className="font-Poppins pt-4">
            <h3 className="text-sm font-Poppins font-medium text-primary">
              University of Waterloo, Canada
            </h3>
            <div className="flex items-center text-primary my-1">
              <FaClock />
              <h6 className="text-xs font-normal ml-1">6 Jan 2022</h6>
            </div>
            <div className="text-primary my-2">
              <h2 className="font-bold text-lg">
                <Link to="/" className="hover:text-accent">
                  The future of Specialist care in Africa
                </Link>
              </h2>
              <p className="font-light text-sm">
                Read how she founded MedAtlas, a telemedicine health-care
                platform to make fertility care in Africa more accessible.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-5 shadow-sm w-96 rounded-md">
          <div className="flex justify-center">
            <img
              src={image}
              alt=""
              className="w-80 h-64 shadow-md rounded-md"
            />
          </div>
          <div className="font-Poppins pt-4">
            <h3 className="text-sm font-Poppins font-medium text-primary">
              University of Waterloo, Canada
            </h3>
            <div className="flex items-center text-primary my-1">
              <FaClock />
              <h6 className="text-xs font-normal ml-1">6 Jan 2022</h6>
            </div>
            <div className="text-primary my-2">
              <h2 className="font-bold text-lg">
                <Link to="/" className="hover:text-accent">
                  The future of Specialist care in Africa
                </Link>
              </h2>
              <p className="font-light text-sm">
                Read how she founded MedAtlas, a telemedicine health-care
                platform to make fertility care in Africa more accessible.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8 text-center">
        <button className="py-2 px-8 border-none rounded-md text-white text-sm font-medium transition bg-primary hover:bg-accent">
          View All
        </button>
      </div>
    </div>
  );
};

export default BlogSection;
