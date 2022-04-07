import React, { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSignOutReducer } from "@hooks";

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

export const SignOutButton = () => {
  const [signOut] = useSignOutReducer();
  const nagivate = useNavigate();

  const onSignOutClick = useCallback(async () => {
    await signOut();
    nagivate("/");
  }, []);

  return (
    <div className="border border-gray rounded bg-accent self-center p-2">
      <button
        onClick={onSignOutClick}
        className="border-none bg-accent transition-all text-white font-medium hover:text-white"
      >
        Sign Out
      </button>
    </div>
  );
};
