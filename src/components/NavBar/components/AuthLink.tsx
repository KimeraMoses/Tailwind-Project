import { Link } from "react-router-dom";

export const AuthLink = ({ path, children }: any) => {
  const style = `
  ml-8 
  whitespace-nowrap
  inline-flex 
  items-center 
  justify-center
  px-6 
  py-2 
  border 
  border-2
  border-solid
  border-primary
  text-primary
  font-semibold
  rounded-md 
  shadow-sm 
  text-base 
  transition-all
  hover:text-white
  hover:bg-primary`;
  return (
    <Link to={path} className={style}>
      {children}
    </Link>
  );
};
