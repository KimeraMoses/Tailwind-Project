import React from "react";
interface PartnerProps {
  title: string;
  location: string;
  image: any;
}

const GlobalPartnerCard: React.FC<PartnerProps> = ({
  title,
  location,
  image,
}) => {
  return (
    <div className="bg-white p-2 shadow-sm w-80 rounded-md font-Poppins text-primary">
      <div className="flex justify-center flex-col">
        <img src={image} alt="" className="w-80 h-64 rounded-md" />
        <h3 className="font-semibold text-lg">{title}</h3>
        <h6 className="font-light">{location}</h6>
      </div>
    </div>
  );
};

export default GlobalPartnerCard;
