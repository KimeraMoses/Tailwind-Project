import React, { useState } from "react";
import { RadioInput } from "src/components/InputField";
import medLogo from "../../../../assets/medatlas_logo.png";
import masterCardLogo from "../../../../assets/mastercard.png";
import visaLogo from "../../../../assets/visa.png";
import { paymentModes } from "./../../../../constants/paymentModes";
import MobileMoneyForm from "./MobileMoneyForm";
import { DecoratedButton } from "@components";
import MasterCardForm from "./MasterCardForm";
import { useNavigate } from "react-router-dom";
interface paymentProps {
  paid?: boolean;
}
const PaymentForm = (props: paymentProps) => {
  const [paymentMode, setPaymentMode] = useState(paymentModes.MOBILEMONEY);
  const { paid } = props;
  const navigate = useNavigate();
  const paymentSelectHandler = (e: any) => {
    const { value } = e.target;
    setPaymentMode(value);
  };

  return (
    <div className="bg-white shadow-md rounded-md p-5 md:w-132 w-full">
      <div className="justify-center font-Poppins flex flex-col items-center">
        <img src={medLogo} alt="MedAtlas" className="w-40 mb-4" />
        <h2 className="text-xl text-black font-bold mb-7">
          Consultation With a Specialist Doctor
        </h2>
        <h6 className="text-xs font-normal font-Poppins text-center mb-7">
          Secure Visa/MasterCard/Mobile Money online payment by flutterwave
        </h6>
      </div>

      {paid ? (
        <div className="text-center">
          <h4 className="text-sm font-semibold font-Poppins">Thank you!</h4>
          <h4 className="text-sm font-semibold font-Poppins">
            The payment was successful
          </h4>

          <p className="text-xs text-grayPrimary my-6">
            Please check your email for a link and the doctor's whatsApp number
          </p>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center pr-3">
            <div className="form-check form-check-inline flex items-center">
              <RadioInput
                value={paymentModes.MOBILEMONEY}
                name="paymentMode"
                id={paymentModes.MOBILEMONEY}
                onChange={paymentSelectHandler}
              />
              <h6 className="text-primary font-bold">
                <strong>Mobile Money</strong>
              </h6>
            </div>
            <div className="form-check form-check-inline flex items-center">
              <RadioInput
                value={paymentModes.MASTERCARD}
                name="paymentMode"
                id={paymentModes.MASTERCARD}
                onChange={paymentSelectHandler}
              />
              <img src={masterCardLogo} alt="MasterCard" className="w-16" />
            </div>
            <div className="form-check form-check-inline flex items-center">
              <RadioInput
                value={paymentModes.VISACARD}
                name="paymentMode"
                id={paymentModes.VISACARD}
                onChange={paymentSelectHandler}
              />
              <img src={visaLogo} alt="Visa" className="w-12" />
            </div>
          </div>
          <div className="mt-4">
            {paymentMode === paymentModes.MASTERCARD ? (
              <MasterCardForm />
            ) : paymentMode === paymentModes.VISACARD ? (
              <MasterCardForm />
            ) : (
              <MobileMoneyForm />
            )}
          </div>
          <h4 className="text-sm font-Poppins font-extrabold text-black">
            Amount(USD): 50.0
          </h4>
        </>
      )}
      <div className="my-2 text-right">
        <DecoratedButton
          color="accent"
          hoverColor="primary"
          className="rounded-md px-16"
          onClick={
            paid
              ? () => navigate("/appointment/payment-success")
              : () => console.log("Paid successfully")
          }
        >
          {paid ? "Close" : "Pay"}
        </DecoratedButton>
      </div>
    </div>
  );
};

export default PaymentForm;
