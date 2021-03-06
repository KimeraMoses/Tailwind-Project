import React from "react";
import Image from "../../../../assets/team/margret.png";
import Avatar from "@mui/material/Avatar";
import { FileUpload } from "../BookingForm/BookingForm";
import { DecoratedButton } from "@components";

const AppointmentSummary: React.FunctionComponent = () => {
  return (
    <div className="w-full">
      <h1 className="text-center my-6 font-bold text-primary text-2xl">
        Appointment Summary
      </h1>
      <hr className="text-primary" />
      <div className="w-full flex items-center my-4 p-5">
        <Avatar
          alt="Samuel Mutumba"
          src={Image}
          sx={{ width: 64, height: 64 }}
        />
        <div className="text-left ml-2">
          <h1 className="text-medium ">Samuel Mutumba</h1>
          <p className="font-light">Software Developer</p>
          <p className="font-light">Kampala , Uganda </p>
          <p className="font-light">Luganda, English</p>
        </div>
      </div>
      <div className="text-primary w-full px-5">
        <div className="flex w-full items-center">
          <div className="font-semibold mr-1 w-1/2">Email: </div>
          <div className="font-medium w-1/2">patients@gmail.com</div>
        </div>
        <div className="flex w-full items-center">
          <div className="font-semibold mr-1 w-1/2">WhatsApp Number:</div>
          <div className="font-medium w-1/2">+2567891399262</div>
        </div>
        <div className="flex w-full items-center">
          <div className="font-semibold mr-1 w-1/2">Appointment By:</div>
          <div className="font-medium w-1/2">Online(Google Meet)</div>
        </div>
        <div className="flex w-full items-center">
          <div className="font-semibold mr-1 w-1/2">
            Patient to Doctor Status:
          </div>
          <div className="font-medium w-1/2">New</div>
        </div>
        <div className="flex w-full items-center">
          <div className="font-semibold mr-1 w-1/2">Type of Appointment:</div>
          <div className="font-medium w-1/2">Consultation</div>
        </div>
        <div className="flex w-full items-center">
          <div className="font-semibold mr-1 w-1/2">Condition Description:</div>
          <div className="font-medium w-1/2">We can't have kids</div>
        </div>
        <FileUpload isPreview={true} />

        <div className="flex my-3">
          <div className="border border-grayPrimary px-4 py-2 rounded-md text-primary font-medium mr-4">
            25/05/2022
          </div>
          <div className="border border-grayPrimary px-4 py-2 rounded-md text-primary font-medium">
            EAT: 10:00 am - 11:00 am
          </div>
        </div>
        <div className="flex justify-end my-5">
          <DecoratedButton
            color="accent"
            hoverColor="primary"
            className="rounded-lg"
          >
            Confirm
          </DecoratedButton>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSummary;
