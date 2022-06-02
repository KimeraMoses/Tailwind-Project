import React, { useState, useCallback, useMemo, useRef } from "react";
import { Button, DecoratedButton, showNotification } from "@components";
import { GenericView } from "@views";
import { useQuery } from "@hooks";
import * as enums from "@interface/enum";
import { Link, useNavigate } from "react-router-dom";
import { HttpApi } from "@api";
import { InputField } from "./../../components/InputField/InputField";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const searchParams = useQuery();

  const accountType = useMemo(
    () => searchParams.get("accountType") || enums.AccountTypes.PATIENT,
    [searchParams]
  ) as enums.AccountTypes;

  const onEmailChange = useCallback((event: React.SyntheticEvent) => {
    const { value } = event.target as HTMLInputElement;
    setEmail(value);
  }, []);

  const onSubmit: React.FormEventHandler = useCallback(
    async (event) => {
      event.preventDefault();
      await HttpApi.forgotPassword({ email });
      showNotification(
        "Password reset instructions have been sent to your email",
        "success"
      );
    },
    [email, navigate]
  );

  return (
    <>
      <GenericView>
        <form onSubmit={onSubmit} ref={formRef} className="w-full">
          <h3 className="my-6 text-center text-xl font-semibold text-primary">
            Reset Password
          </h3>
          <div className="mb-4">
            <div className="my-2">
              <label className="text-base text-primary font-semibold mb-1">
                Email
              </label>
              <InputField
                name="email"
                placeholder="name@gmail.com"
                type="email"
                required
                onChange={onEmailChange}
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
              Send reset email
            </DecoratedButton>
          </div>
          <div className="my-6 p-4">
            <div className="flex gap-1 text-primary font-semibold">
              Do you have an account?{" "}
              <Link
                className="border-none transition-all text-accent font-semibold hover:text-primary"
                to={`/login?accountType=${accountType}`}
              >
                Login
              </Link>
            </div>
          </div>
        </form>
      </GenericView>
    </>
  );
};
