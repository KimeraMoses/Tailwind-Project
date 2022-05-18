import React from "react";
import { InputField } from "./../../../InputField/InputField";
import medLogo from "../../../../assets/medatlas_logo.png";
import { AiFillLock } from "react-icons/ai";
import { DecoratedButton } from "./../../../Buttons/ButtonDecorated";
import { useNavigate } from "react-router-dom";

const OtpForm: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-white shadow-md rounded-md p-5 md:w-132 w-full ">
        <div className="justify-center font-Poppins flex flex-col items-center">
          <img src={medLogo} alt="MedAtlas" className="w-40 mb-4" />
          <h2 className="text-xl text-primary font-bold mb-7">
            Payment for Specialist Doctor Consultation
          </h2>
          <h6 className="text-sm font-normal font-Poppins text-center mb-7">
            Please enter the MOMO validation OTP sent to you via SMS and
            Whatsapp to complete this transaction
          </h6>
        </div>
        <div className="w-full my-2 mb-4 flex justify-center">
          <div className="w-1/2 mx-auto pb-4">
            <InputField placeholder="OTP Code" name="otp" />
          </div>
        </div>
        <div className="my-2 text-right">
          <DecoratedButton
            color="accent"
            hoverColor="primary"
            className="rounded-md px-16"
            onClick={() => navigate("/appointment/payment-success")}
          >
            Submit
          </DecoratedButton>
        </div>
      </div>
      <div className="text-center flex justify-center items-center  mb-32 p-4 text-primary font-semibold uppercase">
        <AiFillLock className="mr-1" /> Secured by Flutterwave
      </div>
    </div>
  );
};

export default OtpForm;
