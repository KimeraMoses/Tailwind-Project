import React from "react";
import { MdOutlineNotificationsActive } from "react-icons/md";

const ComingSoon: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="w-full p-3 rounded pb-20 flex items-center justify-center bg-backgroundSidebar">
      <div className="flex flex-col justify-center items-center max-w-[450px] p-10  text-center mt-[50px] mx-auto mb-0">
        <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center bg-primary">
          <MdOutlineNotificationsActive className="text-5xl text-white" />
        </div>
        <h2 className="mt-4 text-primary font-semibold mb-3 text-3xl">
          {title}
        </h2>
        <p className="text-base text-primary">
          The functionality of this feature is still under development and will
          be available in the coming versions
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
