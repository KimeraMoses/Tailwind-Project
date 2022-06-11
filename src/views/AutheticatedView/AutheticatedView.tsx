import React, { useState, useEffect } from "react";
import { useCurrentUser } from "@hooks";
import { useNavigate } from "react-router-dom";

export const AutheticatedView: React.FunctionComponent = ({ children }) => {
  const user = useCurrentUser();
  const [isLoggedIn] = useState(!!user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn)
      navigate(
        `/login?redirect=${encodeURIComponent(
          `${window.location.pathname}${window.location.search}${window.location.hash}`
        )}`
      );
  }, []);

  return !user ? null : <div>{children}</div>;
};

export const LoggedInRedirect: React.FunctionComponent = ({ children }) => {
  const user = useCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate(`/dashboard/user`);
  }, [user]);

  return <div>{children}</div>;
};
