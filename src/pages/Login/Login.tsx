import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect,
} from "react";
import { Button, DecoratedButton } from "@components";
import { GenericView } from "@views";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as enums from "@interface/enum";
import { useQuery } from "@hooks";
import { HttpApi } from "@api";
import { InputField } from "./../../components/InputField/InputField";

export const Login: React.FunctionComponent = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const searchParams = useQuery();

  const accountType = useMemo(
    () => searchParams.get("accountType") || enums.AccountTypes.PATIENT,
    [searchParams]
  ) as enums.AccountTypes;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      setIsLoading(true);
      event.preventDefault();
      await HttpApi.login({ email, password, accountType });
      setIsLoading(false);
      const redirect = searchParams.get("redirect");
      if (redirect) navigate(redirect);
      else navigate("/dashboard/news-feeds");
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
    <GenericView
      isDoctor={accountType === enums.AccountTypes.DOCTOR ? true : false}
    >
      <form onSubmit={onSubmit} ref={formRef} className="w-full">
        <h3 className="mb-2 text-center text-2xl font-semibold text-primary">
          {getLoginTitle(accountType)}
        </h3>
        <div className="mb-7">
          <div className="my-2">
            <label className="text-base text-primary font-medium mb-1">
              Email
            </label>
            <InputField
              name="email"
              placeholder="Email"
              type="email"
              required
              onChange={onEmailChange}
            />
          </div>
          <div className="my-2">
            <label className="text-base text-primary font-medium mb-1">
              Password
            </label>
            <InputField
              name="password"
              placeholder="password"
              type="password"
              required
              onChange={onPasswordChange}
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <DecoratedButton
            disabled={!formRef.current?.checkValidity()}
            color="accent"
            hoverColor="primary"
            className="w-3/4 px-6 py-2"
            type="submit"
          >
            {isLoading ? "Logging In..." : "Login"}
          </DecoratedButton>
        </div>

        <div className="my-4 p-4 text-center">
          <div className="flex gap-1 text-primary font-semibold justify-center items-center">
            New to MedAtlas?{" "}
            <Link
              className="border-none transition-all text-accent font-semibold hover:text-primary"
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
