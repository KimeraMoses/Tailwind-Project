import React from "react";

export const Loader: React.FunctionComponent<LoaderProps> = ({ size = 12 }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`loader
        ease-linear
        rounded-full
        border-8 border-t-8 border-white
        shadow
        h-${size}
        w-${size}
      `}
      ></div>
    </div>
  );
};

type LoaderProps = {
  size?: number;
};
