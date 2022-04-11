import React from "react";
import { FiExternalLink } from "react-icons/fi";

const TeamCard = ({
  image,
  name,
  title,
  linkedIn,
  proffession,
  firstName,
}: any) => {
  return (
    <div className="flex select-none w-128 shadow-sm pb-2">
      <div className="rounded-full">
        <img
          className="w-36 h-36 rounded-full mx-auto"
          src={image}
          alt=""
          width="384"
          height="512"
        />
      </div>
      <div className="flex flex-col gap-2 px-2 text-primary text-left">
        <h2 className="font-bold text-lg">{name}</h2>
        <h3 className="font-semibold text-lg">{title}</h3>
        <h3 className="font-normal text-lg">{proffession}</h3>
        <h3 className="font-semibold text-lg">About {firstName}:</h3>
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
