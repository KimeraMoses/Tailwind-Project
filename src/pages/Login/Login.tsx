import React, { useState, useCallback, useMemo, useRef } from "react";
import { Button } from "@components";
import { GenericView } from "@views";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as enums from "@interface/enum";
import { useQuery } from "@hooks";
import { HttpApi } from "@api";

export const Login: React.FunctionComponent = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const searchParams = useQuery();

  const accountType = useMemo(
    () => searchParams.get("accountType") || enums.AccountTypes.PATIENT,
    [searchParams]
  ) as enums.AccountTypes;
  const counterAccountType = useMemo(
    () =>
      accountType === enums.AccountTypes.DOCTOR
        ? enums.AccountTypes.PATIENT
        : enums.AccountTypes.DOCTOR,
    [accountType]
  );

  const onEmailChange = useCallback((event: React.SyntheticEvent) => {
    const { value } = event.target as HTMLInputElement;
    setEmail(value);
  }, []);

  const onPasswordChange = useCallback((event: React.SyntheticEvent) => {
    const { value } = event.target as HTMLInputElement;
    setPassword(value);
  }, []);

  const onSubmit: React.FormEventHandler = useCallback(
    async (event) => {
      event.preventDefault();
      await HttpApi.login({ email, password, accountType });
      const redirect = searchParams.get("redirect");
      if (redirect) navigate(redirect);
      else navigate("/account");
    },
    [email, password, accountType, navigate, searchParams]
  );

  const getLoginTitle = useCallback((accountType: enums.AccountTypes) => {
    switch (accountType) {
      case enums.AccountTypes.DOCTOR:
        return "Doctor Login";
      case enums.AccountTypes.PATIENT:
        return "Patient Login";
      case enums.AccountTypes.ADMIN:
        return "Admin Login";
      default:
        return "Login";
    }
  }, []);

  return (
    <GenericView>
      <form onSubmit={onSubmit} ref={formRef}>
        <h3 className="my-6 text-center text-2xl font-medium">
          {getLoginTitle(accountType)}
        </h3>
        <div className="mb-3">
          <div>
            <input
              className="
				        border
						border-gray
						rounded
				        w-full
				        h-12
				        p-4
				        mb-5
				        "
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={onEmailChange}
            ></input>
            <input
              className="
				        border
						border-gray
						rounded
				        w-full
				        h-12
				        p-4
				        mb-5
				        "
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={onPasswordChange}
            ></input>
          </div>
        </div>
        <Button type="submit" disabled={!formRef.current?.checkValidity()}>
          Login
        </Button>
        <div className="my-6 p-4">
          <div className="flex gap-1">
            New to MedAtlas?{" "}
            <Link
              className="border-none transition-all text-primary font-medium hover:text-accent"
              to={`/register?accountType=${accountType}`}
            >
              Create account
            </Link>
          </div>
        </div>
        <div
          className={`
			      flex 
			      justify-center
			      items-center
			      w-full
			      p-4
			      border-t
			      border-gray
			      `}
        >
          <div className="flex  gap-1">
            Forgotten your password?
            <Link
              to={`/forgot-password?accountType=${accountType}`}
              className="ml-2  transition-all text-primary font-medium hover:text-accent"
            >
              Click here
            </Link>
          </div>
        </div>
      </form>
    </GenericView>
  );
};
