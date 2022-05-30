import React from "react";
import "./Card.css";

const FeatureCard: React.FC<{ feature: string; color: string }> = ({
  feature,
  color,
}) => {
  return (
    <div
      className={`hero_card relative bg-${color} ${
        color === "accent" ? "hero_card_accent" : "hero_card_primary"
      } mx-2 mb-2 shadow-md w-[250px] flex items-center justify-center font-semibold text-3xl text-white py-[13px] pl-[35px] pr-8 after:content-[''] box-border after:absolute after:flex after:items-center after:w-[60px] after:h-[100px] after:right-0 after:bottom-1/2 after:translate-y-1/2 after:-mr-[59.5px] after:box-border select-none`}
    >
      {feature}
    </div>
  );
};
export default FeatureCard;
