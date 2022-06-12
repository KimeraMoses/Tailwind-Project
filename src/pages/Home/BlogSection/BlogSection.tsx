import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/bkgrd-authflow.jpeg";
import { FaClock } from "react-icons/fa";

const BlogSection: React.FunctionComponent = () => {
  return (
    <div className="w-full my-6">
      <h2 className="text-4xl text-primary text-center mb-3 font-semibold font-Poppins select-none">
        Blogs and News
      </h2>
      <div className="flex justify-center gap-4 my-8 select-none">
        <div className="bg-white p-5 shadow-sm w-96 rounded-md">
          <div className="flex justify-center">
            <img
              src="https://uwaterloo.ca/news/sites/ca.news/files/styles/feature_xl/public/8273_colour.jpg?itok=KgO44A3h"
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
                <a
                  href="https://uwaterloo.ca/news/global-impact/future-specialist-care-africa"
                  className="hover:text-accent"
                  target="_blank"
                  rel="noreferrer"
                >
                  The future of Specialist care in Africa
                </a>
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
              src="https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/newseventsimage_1645095430023_mainnews2012_x1.jpg"
              alt=""
              className="w-80 h-64 shadow-md rounded-md"
            />
          </div>
          <div className="font-Poppins pt-4">
            <h3 className="text-sm font-Poppins font-medium text-primary">
              Imperial College London
            </h3>
            <div className="flex items-center text-primary my-1">
              <FaClock />
              <h6 className="text-xs font-normal ml-1">22 Feb 2022</h6>
            </div>
            <div className="text-primary my-2">
              <h2 className="font-bold text-lg">
                <a
                  href="https://www.imperial.ac.uk/news/234014/east-africa-entrepreneurs-share-stories-innovation/"
                  className="hover:text-accent"
                  target="_blank"
                  rel="noreferrer"
                >
                  East Africa entrepreneurs share stories of innovation for good
                </a>
              </h2>
              <p className="font-light text-sm">
                Four entrepreneurs share their stories of how they are leading
                innovative businesses that are striving to create positive
                change in the region.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-5 shadow-sm w-96 rounded-md">
          <div className="flex justify-center">
            <img
              src="https://uwaterloo.ca/public-health-sciences/sites/ca.public-health-sciences/files/resize/uploads/images/margaret-mutumba-circle-500-360x360.png"
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
              <h6 className="text-xs font-normal ml-1">4 Aug 2021</h6>
            </div>
            <div className="text-primary my-2">
              <h2 className="font-bold text-lg">
                <a
                  href="https://uwaterloo.ca/public-health-sciences/news/medatlas-wins-concept-5k-startup-competition"
                  className="hover:text-accent"
                  target="_blank"
                  rel="noreferrer"
                >
                  MedAtlas wins Concept $5K startup competition
                </a>
              </h2>
              <p className="font-light text-sm">
                MedAtlas, founded by Public Health and Health Systems doctoral
                student Margaret Mutumba, has won the Concept $5K challenge for
                Spring 2021.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="my-8 text-center">
        <button className="py-2 px-8 border-none rounded-md text-white text-sm font-medium transition bg-primary hover:bg-accent">
          View All
        </button>
      </div> */}
    </div>
  );
};

export default BlogSection;
