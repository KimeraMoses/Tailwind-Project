import React, { useState, useCallback, useMemo, useRef } from "react";
import { Button, showNotification } from "@components";
import { GenericView } from "@views";
import * as enums from "@interface/enum";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HttpApi } from "@api";
import { useQuery } from "@hooks";
import { InputField } from "./../../components/InputField/InputField";
import { DecoratedButton } from "./../../components/Buttons/ButtonDecorated";

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
      <form onSubmit={onSubmit} ref={formRef} className="w-full">
        <h3 className="my-6 text-center text-xl font-semibold text-primary">
          Reset Password
        </h3>
        <div className="mb-4">
          <div className="my-2">
            <label className="text-base text-primary font-medium mb-1">
              New Password
            </label>
            <InputField
              name="password"
              placeholder="password"
              type="password"
              required
              onChange={onPasswordChange("password")}
            />
          </div>
          <div className="my-2">
            <label className="text-base text-primary font-medium mb-1">
              Confirm Password
            </label>
            <InputField
              name="confirmPassword"
              placeholder="confirmPassword"
              type="password"
              required
              onChange={onPasswordChange("confirmPassword")}
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
            Reset
          </DecoratedButton>
        </div>

        <div className="my-6 p-4">
          <div className="flex gap-1">
            Ready to signin?{" "}
            <Link
              className="border-none transition-all text-accent font-medium hover:text-primary"
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
