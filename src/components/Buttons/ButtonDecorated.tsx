import React from "react";
import * as types from "@interface/models";

export const DecoratedButton: React.FunctionComponent<
  React.HTMLProps<HTMLButtonElement> & PropTypes
> = ({
  children,
  color = "primary ",
  hoverColor = "accent",
  className,
  ...props
}) => {
  return (
    <button
      className={`p-3 border rounded bg-${color} cursor-pointer text-white transition hover:bg-${hoverColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

type PropTypes = {
  color?: string;
  hoverColor?: string;
  type?: any;
  className?: string;
};
