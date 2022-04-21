import React from "react";
import medLogo from "../../../../assets/medatlas_logo.png";
import { DecoratedButton } from "@components";
import { useNavigate } from "react-router-dom";
import { AiFillLock } from "react-icons/ai";

interface paymentProps {
  type?: string;
}
const PaymentStatus = (props: paymentProps) => {
  const { type } = props;
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-white shadow-md rounded-md p-5 md:w-132 w-full">
        <div className="justify-center font-Poppins flex flex-col items-center">
          <img src={medLogo} alt="MedAtlas" className="w-40 mb-4" />
          <h2 className="text-xl text-primary font-bold mb-7">
            Payment for Specialist Doctor Consultation
          </h2>
        </div>

        <div className="text-center">
          <h4 className="text-sm font-semibold font-Poppins">
            {type === "success" ? "Thank you!" : "Sorry"}
          </h4>
          <h4 className="text-sm font-semibold font-Poppins">
            The payment was {type === "success" ? "successful" : "unsuccessful"}
          </h4>

          <p className="text-sm text-grayPrimary my-6">
            {type === "success"
              ? "Please check your email for the appointment confirmation. Your Doctor will be in touch soon."
              : "Please check the information you have provided and try again or contact your service provider for help"}
          </p>
        </div>

        <div className="my-2 text-right mt-4">
          <DecoratedButton
            color="accent"
            hoverColor="primary"
            className="rounded-md px-16"
            onClick={() =>
              type === "fail" ? navigate("/appointment/booking") : navigate("/")
            }
          >
            {type === "fail" ? "Try Again" : "Close"}
          </DecoratedButton>
        </div>
      </div>
      <div className="text-center flex justify-center items-center  mb-24 p-4 text-primary font-semibold uppercase">
        <AiFillLock className="mr-1" /> Secured by Flutterwave
      </div>
    </div>
  );
};

export default PaymentStatus;
