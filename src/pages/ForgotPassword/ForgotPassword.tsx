import React, { useState, useCallback, useMemo, useRef } from "react";
import { Button, showNotification } from "@components";
import { GenericView } from "@views";
import { useQuery } from "@hooks";
import * as enums from "@interface/enum";
import { Link, useNavigate } from "react-router-dom";
import { HttpApi } from "@api";

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
    <GenericView>
      <form onSubmit={onSubmit} ref={formRef}>
        <h3 className="my-6 text-center text-xl font-medium">Reset Password</h3>
        <div className="mb-7">
          <div>
            <input
              className="
				        shadow
				        w-full
				        h-11
				        p-4
				        mb-5
				        "
              type="email"
              name="email"
              placeholder="email"
              required
              onChange={onEmailChange}
            ></input>
          </div>
        </div>
        <Button type="submit" disabled={!formRef.current?.checkValidity()}>
          Send reset email
        </Button>
        <div className="my-6 p-4">
          <div className="flex gap-1">
            Do you have an account?{" "}
            <Link
              className="border-none transition-all text-primary font-medium hover:text-accent"
              to={`/login?accountType=${accountType}`}
            >
              Login
            </Link>
          </div>
        </div>
      </form>
    </GenericView>
  );
};
