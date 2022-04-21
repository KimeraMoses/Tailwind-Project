import { Specialities } from "@interface/enum";
import React from "react";
import cardilogist from "@assets/carousel/cardiologist.png";
import fertility from "@assets/carousel/fertility.png";
import mentalHealth from "@assets/carousel/mentalHealth.png";
import neurology from "@assets/carousel/neurology.png";
import orthopedic from "@assets/carousel/orthopedic.png";
import urology from "@assets/carousel/urology.png";

function getIcon(key: Specialities) {
  const icons = {
    cardiologist: cardilogist,
    fertility: fertility,
    mentalHealth: mentalHealth,
    neurology: neurology,
    orthopedic: orthopedic,
    urology: urology,
  };

  return icons[key];
}

type IconProps = {
  icon: string;
  name: string;
};

const IconCarousel: React.FC<IconProps> = ({ icon, name }: any) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-36 h-36 p-3 bg-white border border-gray shadow rounded-full">
        <img className="object-cover" src={getIcon(icon)} />
        <div className="absolute bottom-3 right-2 w-5 h-5 border-4 border-white  rounded-full bg-accent shadow"></div>
      </div>
      <h3 className="mt-4 text-lg text-primary font-bold font-Poppins">
        {name}
      </h3>
    </div>
  );
};

export const iconsCarousel = [
  {
    icon: <IconCarousel name="Cardiologist" icon={Specialities.CARDIOLOGIST} />,
  },
  {
    icon: <IconCarousel name="Fertility" icon={Specialities.FERTILITY} />,
  },
  {
    icon: (
      <IconCarousel name="Mental Health" icon={Specialities.MENTALHEALTH} />
    ),
  },
  {
    icon: <IconCarousel name="Neurology" icon={Specialities.NEUROLOGY} />,
  },
  {
    icon: <IconCarousel name="Orthopedic" icon={Specialities.ORTHOPEDIC} />,
  },
  {
    icon: <IconCarousel name="Urology" icon={Specialities.UROLOGY} />,
  },
];
