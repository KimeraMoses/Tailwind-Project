import React, { useState, useCallback, useMemo, useRef } from "react";
import { Button, showNotification } from "@components";
import { GenericView } from "@views";
import * as enums from "@interface/enum";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HttpApi } from "@api";
import { useQuery } from "@hooks";

export const ResetPassword = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const searchParams = useQuery();

  const accountType = useMemo(
    () => searchParams.get("accountType") || enums.AccountTypes.PATIENT,
    [searchParams]
  ) as enums.AccountTypes;

  const token = useMemo(() => searchParams.get("token"), [searchParams]);

  const onPasswordChange = useCallback(
    (passwordType: "password" | "confirmPassword") =>
      (event: React.SyntheticEvent) => {
        const { value } = event.target as HTMLInputElement;
        if (passwordType === "password") setPassword(value);
        else setConfirmPassword(value);
      },
    []
  );

  const onSubmit: React.FormEventHandler = useCallback(
    async (event) => {
      event.preventDefault();

      if (password !== confirmPassword) {
        return showNotification("Passwords dont match", "error");
      }

      await HttpApi.resetPassword({ password, token: token! });
      navigate(`/login?accountType=${accountType}`);
      showNotification("Your password has successfully been reset", "success");
      return undefined;
    },
    [password, confirmPassword, token, navigate, accountType]
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
              type="password"
              name="password"
              placeholder="new password"
              required
              onChange={onPasswordChange("password")}
            ></input>
            <input
              className="
				        shadow
				        w-full
				        h-11
				        p-4
				        mb-5
				        "
              type="password"
              name="confirmPassword"
              placeholder="confirm password"
              required
              onChange={onPasswordChange("confirmPassword")}
            ></input>
          </div>
        </div>
        <Button type="submit" disabled={!formRef.current?.checkValidity()}>
          Reset
        </Button>
        <div className="my-6 p-4">
          <div className="flex gap-1">
            Ready to signin?{" "}
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
