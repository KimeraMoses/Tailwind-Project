import React, { useMemo, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignOutReducer } from "@hooks";
import { FiLogOut } from "react-icons/fi";

export const Button: React.FunctionComponent<
  React.HTMLProps<HTMLButtonElement> & PropTypes
> = ({ disabled, children, className, ...props }) => {
  const styles = useMemo(
    () =>
      `
  w-full
  p-4  
  rounded 
  transition-all 
  bg-primary 
  text-white
  disabled:opacity-50
  disabled:cursor-not-allowed
  ${disabled ? "" : "hover:bg-accent"}
   ` + (className || ""),
    [disabled, className]
  );
  return (
    <button className={styles} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

type PropTypes = {
  type?: any;
  disabled?: boolean;
  className?: string;
};

export const SignOutButton: React.FunctionComponent = () => {
  const [signOut] = useSignOutReducer();
  const [isLoading, setIsLoading] = useState(false);
  const nagivate = useNavigate();

  const onSignOutClick = useCallback(async () => {
    setIsLoading(true);
    await signOut();
    setIsLoading(false);
    nagivate("/login");
  }, []);

  return (
    // <div className="flex items-center justify-center cursor-pointer px-5 py-2 border font-semibold rounded-lg capitalize p-2">
    //   <button
    //     onClick={onSignOutClick}
    //     className="flex items-center justify-center cursor-pointer px-5 py-2 border font-semibold rounded-lg capitalize"
    //   >
    //     Sign Out
    //   </button>
    // </div>

    <div className="text-center mx-5 mb-1 select-none">
      <div
        onClick={onSignOutClick}
        className="flex items-center justify-center cursor-pointer px-5 py-2 border font-semibold rounded-lg capitalize text-primary border-accent"
      >
        {isLoading ? "Loging Out.." : "Logout"}
        <FiLogOut className="text-lg ml-2" />
      </div>
    </div>
  );
};
