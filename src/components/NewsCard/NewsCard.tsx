import React from "react";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

interface CardProps {
  image: any;
  location: string;
  date: string;
  title: string;
  description: string;
}

const NewsCard: React.FC<CardProps> = ({
  image,
  location,
  date,
  title,
  description,
}) => {
  return (
    <div className="bg-white p-5 shadow-sm w-1/2 rounded-md">
      <div className="flex justify-center">
        <img src={image} alt="" className="w-full h-72 shadow-md rounded-md" />
      </div>
      <div className="font-Poppins pt-4">
        <h3 className="text-sm font-Poppins font-medium text-primary">
          {location}
        </h3>
        <div className="flex items-center text-primary my-1">
          <FaClock />
          <h6 className="text-xs font-normal ml-1">{date}</h6>
        </div>
        <div className="text-primary my-2">
          <h2 className="font-bold text-lg">
            <Link to="/" className="hover:text-accent">
              {title}
            </Link>
          </h2>
          <p className="font-light text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
