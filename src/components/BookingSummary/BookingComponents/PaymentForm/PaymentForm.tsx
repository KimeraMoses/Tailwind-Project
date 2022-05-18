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
import { AiFillLock } from "react-icons/ai";
import AppointmentSummary from "../AppointmentSummary/AppointmentSummary";

const PaymentForm: React.FunctionComponent = () => {
  const [paymentMode, setPaymentMode] = useState(paymentModes.MOBILEMONEY);
  const navigate = useNavigate();
  const paymentSelectHandler = (e: any) => {
    const { value } = e.target;
    setPaymentMode(value);
  };
  return (
    <>
      <div className="md:w-132 bg-white mr-8 shadow-md rounded-md ">
        <AppointmentSummary />
      </div>
      <div>
        <div className="bg-white shadow-md rounded-md p-5 md:w-132 w-full">
          <div className="justify-center font-Poppins flex flex-col items-center">
            <img src={medLogo} alt="MedAtlas" className="w-40 mb-4" />
            <h2 className="text-xl text-primary font-bold mb-7">
              Payment for Specialist Doctor Consultation
            </h2>
            <h6 className="text-xs font-normal font-Poppins text-center mb-7">
              {paymentMode === paymentModes.MOBILEMONEY
                ? "A Flutterwave verification code will be sent to your phone via both your WhatsApp and text message to complete payment"
                : null}
            </h6>
          </div>
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

          <div className="my-2 text-right mt-4">
            <DecoratedButton
              color="accent"
              hoverColor="primary"
              className="rounded-md px-16"
              onClick={() => navigate("/appointment/otp")}
            >
              Pay
            </DecoratedButton>
          </div>
        </div>
        <div className="text-center flex justify-center items-center  mb-24 p-4 text-primary font-semibold uppercase">
          <AiFillLock className="mr-1" /> Secured by Flutterwave
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
