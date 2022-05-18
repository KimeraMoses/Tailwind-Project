import React from "react";
import { FiExternalLink } from "react-icons/fi";

interface TeamProps {
  image: any;
  name: string;
  title: string;
  linkedIn: string;
  proffession: string;
  firstName: string;
}

const TeamCard: React.FC<TeamProps> = ({
  image,
  name,
  title,
  linkedIn,
  proffession,
  firstName,
}) => {
  return (
    <div className="flex select-none pb-2 w-128 m-2">
      <div className="rounded-full">
        <img
          className="w-36 h-36 rounded-full mx-auto"
          src={image}
          alt=""
          width="155"
          height="155"
        />
      </div>
      <div className="flex flex-col gap-2 px-2 text-primary text-left">
        <h2 className="font-bold text-sm">{name}</h2>
        <h3 className="font-semibold text-sm">{title}</h3>
        <h3 className="font-normal text-sm">{proffession}</h3>
        <h3 className="font-semibold text-sm">About {firstName}:</h3>
        <a
          href={`https://linkedin.com/${linkedIn}`}
          className="flex items-center"
        >
          LinkedIn Account <FiExternalLink className="ml-2 hover:text-accent" />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
