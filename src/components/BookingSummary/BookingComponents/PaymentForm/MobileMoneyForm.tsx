import React from "react";
import { InputField } from "./../../../InputField/InputField";

const MobileMoneyForm: React.FunctionComponent = () => {
  return (
    <div className="w-full my-2">
      <div className="flex justify-between gap-2 mb-2">
        <InputField placeholder="Phone Number" name="number" type="tel" />
      </div>
    </div>
  );
};

export default MobileMoneyForm;
