import React from "react";
import { InputField } from "./../../../InputField/InputField";

const MasterCardForm: React.FunctionComponent = () => {
  return (
    <div className="w-full my-2">
      <div className="flex justify-between gap-2 mb-2">
        <InputField placeholder="Card Number" name="cardNumber" type="number" />
        <InputField placeholder="CVV Code" name="cvv" type="number" />
      </div>
      <div className="flex justify-between gap-2 mb-2">
        <InputField placeholder="Expiry Date" name="edate" />
      </div>
    </div>
  );
};

export default MasterCardForm;
