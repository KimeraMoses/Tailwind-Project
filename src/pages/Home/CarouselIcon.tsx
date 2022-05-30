import { Specialities } from "@interface/enum";
import React from "react";
import cardilogist from "@assets/carousel/cardiologist.png";
import fertility from "@assets/carousel/fertility.png";
import mentalHealth from "@assets/carousel/mentalHealth.png";
import neurology from "@assets/carousel/neurology.png";
import orthopedic from "@assets/carousel/orthopedic.png";
import urology from "@assets/carousel/urology.png";
import oncologist from "@assets/carousel/Oncologist.png";
import neonatologist from "@assets/carousel/Neonatologist.png";
import psychiatrist from "@assets/carousel/psychiatrist.png";
import orthopeadic from "@assets/carousel/orthopeadic.png";
import dietrician from "@assets/carousel/Dietrician.png";
import paediatric from "@assets/carousel/Paediatric.png";
import cosmetic from "@assets/carousel/Cosmetic.png";
import colo from "@assets/carousel/colo.png";
import physiotherapist from "@assets/carousel/Physiotherapist.png";
import nutritionist from "@assets/carousel/nutritionist.png";
import dentist from "@assets/carousel/Dentist.png";
import ent from "@assets/carousel/ent.png";
import anaesthesiologist from "@assets/carousel/anaesthesiologist.png";
import dermatologist from "@assets/carousel/dermatologist.png";
import radiologist from "@assets/carousel/radiologist.png";
import endocrinologist from "@assets/carousel/endocrinologist.png";

function getIcon(key: Specialities) {
  const icons = {
    cardiologist: cardilogist,
    fertility: fertility,
    mentalHealth: mentalHealth,
    neurology: neurology,
    orthopedic: orthopedic,
    urology: urology,
    oncologist: oncologist,
    neonatologist: neonatologist,
    psychiatrist: psychiatrist,
    orthopeadic: orthopeadic,
    dietrician: dietrician,
    paediatric: paediatric,
    cosmetic: cosmetic,
    colo: colo,
    physiotherapist: physiotherapist,
    nutritionist: nutritionist,
    dentist: dentist,
    ent: ent,
    anaesthesiologist: anaesthesiologist,
    nephrologist: urology,
    dermatologist: dermatologist,
    radiologist: radiologist,
    endocrinologist: endocrinologist,
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
  {
    icon: <IconCarousel name="Oncologist" icon={Specialities.ONCOLOGIST} />,
  },
  {
    icon: (
      <IconCarousel name="Neonatologist" icon={Specialities.NEONATOLOGIST} />
    ),
  },
  {
    icon: <IconCarousel name="Cosmetics" icon={Specialities.COSMETIC} />,
  },
  {
    icon: <IconCarousel name="Dietrician" icon={Specialities.DIETRICIAN} />,
  },
  {
    icon: <IconCarousel name="Psychiatrist" icon={Specialities.PSYCHIATRIST} />,
  },
  {
    icon: <IconCarousel name="Paediatric" icon={Specialities.PAEDIATRIC} />,
  },
  {
    icon: (
      <IconCarousel
        name="Anaesthesiologist"
        icon={Specialities.ANAESTHESIOLOGIST}
      />
    ),
  },
  {
    icon: <IconCarousel name="Orthopeadic" icon={Specialities.ORTHOPEADIC} />,
  },
  {
    icon: <IconCarousel name="Colo Rectal" icon={Specialities.COLO} />,
  },
  {
    icon: <IconCarousel name="Nutritionist" icon={Specialities.NUTRITIONIS} />,
  },
  {
    icon: (
      <IconCarousel
        name="Physiotherapist"
        icon={Specialities.PHYSIOTHERAPIST}
      />
    ),
  },
  {
    icon: <IconCarousel name="Dentist" icon={Specialities.DENTIST} />,
  },
  {
    icon: <IconCarousel name="Ent Specialist" icon={Specialities.ENT} />,
  },
  {
    icon: <IconCarousel name="Radiologist" icon={Specialities.RADIOLOGIST} />,
  },
  {
    icon: (
      <IconCarousel name="Dermatologist" icon={Specialities.DERMATOLOGIST} />
    ),
  },
  {
    icon: <IconCarousel name="Nephrologist" icon={Specialities.NEPHROLOGIST} />,
  },
  {
    icon: (
      <IconCarousel
        name="Endocrinologist"
        icon={Specialities.ENDOCRINOLOGIST}
      />
    ),
  },
];
