import * as types from "@interface/models";
import { Link } from "react-router-dom";

export const AuthLink = ({ color, background, path, children, hover }: any) => {
  const style = `${color} ${background}  
  ml-8 
  whitespace-nowrap
  inline-flex 
  items-center 
  justify-center
  px-4 
  py-2 
  border 
  border-transparent
  rounded-md 
  shadow-sm 
  text-base 
  font-medium 
  transition-all
  hover:${hover}`;
  return (
    <Link to={path} className={style}>
      {children}
    </Link>
  );
};
