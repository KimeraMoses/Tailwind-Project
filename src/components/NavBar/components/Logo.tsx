import logo from "@assets/medatlas_logo.png";
import { Link } from "react-router-dom";
export const Logo = () => {
  return (
    <Link to="/">
      <img className="h-8 min-w-logo sm:h-10" src={logo} alt="" />
    </Link>
  );
};
