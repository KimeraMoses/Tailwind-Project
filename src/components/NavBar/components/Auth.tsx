import { AuthLink } from "./AuthLink";

/* eslint-disable react/prop-types */

export const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};

export const AuthNavComponents: React.FunctionComponent<AuthNavProps> = ({
  isMobile = false,
}) => {
  return (
    <div
      className={classNames(
        isMobile ? "flex md:hidden" : "hidden md:flex ",
        "items-center justify-between"
      )}
    >
      <AuthLink
        path={"/login"}
        // color={"text-white"}
        // background={"bg-primary"}
        // hover={"bg-accent"}
      >
        Login
      </AuthLink>
      <AuthLink
        path={"/register"}
        // color={"text-white"}
        // background={"bg-primary"}
        // hover={"bg-accent"}
      >
        Register
      </AuthLink>
    </div>
  );
};

type AuthNavProps = {
  isMobile?: boolean;
};
