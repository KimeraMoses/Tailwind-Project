import React, { useState } from "react";
import { MdOutlineMinimize, MdAdd } from "react-icons/md";

interface FaqProps {
  FaqTitle: string;
  FaqContent: string;
  FaqOpen: any;
}

const FaqCard: React.FC<FaqProps> = ({ FaqTitle, FaqContent, FaqOpen }) => {
  const [open, setOpen] = useState(FaqOpen);
  return (
    <div
      className={`w-full rounded-2xl mb-[10px] shadow-md ${
        open ? "bg-white text-primary" : "bg-white"
      }`}
    >
      <div
        className="flex justify-between p-5 items-center cursor-pointer relative before:content-[''] before:absolute before:left-0 before:h-5 before:w-1 before:rounded-2xl before:bg-primary"
        onClick={() => setOpen(!open)}
      >
        <h4 className="m-0 text-lg font-semibold">{FaqTitle}</h4>
        {open ? (
          <MdOutlineMinimize className="text-2xl" />
        ) : (
          <MdAdd className="text-2xl" />
        )}
      </div>
      {open && (
        <div className="w-full text-primary px-5 pb-4">
          <p className="text-base font-normal">{FaqContent}</p>
        </div>
      )}
    </div>
  );
};

export default FaqCard;
