import React, { useState } from "react";
import { DecoratedButton } from "@components";
import { useNavigate } from "react-router-dom";
import {
  CheckBoxInput,
  InputField,
  RadioInput,
} from "src/components/InputField";
import image1 from "../../../../assets/placeholder.png";
import { RiAttachment2 } from "react-icons/ri";
import Dropdown from "src/components/CustomDropdown/Dropdown";

const BookingForm = () => {
  const [values, setValues] = useState({
    other_reason: false,
  });
  const navigate = useNavigate();

  const handleCheckBox = (e: any) => {
    const { name, checked } = e.target;
    console.log(e, name);
    setValues({ ...values, [name]: checked });
  };

  return (
    <div className="bg-white shadow-md rounded-md p-5 md:w-142 w-full">
      <h2 className="text-2xl text-primary font-semibold font-Poppins mb-4">
        Appointment Scheduling Form
      </h2>
      <form className="select-none font-Poppins">
        <div className="flex gap-3 my-4">
          <InputField placeholder="Name" name="name" />
          <InputField placeholder="Email Address" name="email" type="email" />
        </div>
        <div className="flex gap-3 my-4">
          <InputField placeholder="Appointment By" name="mode" />
          {/* <Dropdown /> */}
          <InputField placeholder="WhatsApp Number" name="number" type="tel" />
        </div>
        <div className="my-4">
          <h6 className="mb-1 font-medium">
            Are you already a patient of this doctor?
          </h6>
          <div className="flex gap-2 ">
            <div className="form-check form-check-inline">
              <RadioInput
                value="option1"
                label="Yes"
                name="isPatient"
                id="01"
              />
            </div>
            <div className="form-check form-check-inline">
              <RadioInput value="option2" label="No" name="isPatient" id="02" />
            </div>
          </div>
        </div>
        <div className="my-4">
          <h6 className="mb-1 font-medium">
            What type of appointment would you like?
          </h6>
          <div className="flex flex-col">
            <CheckBoxInput
              name="consultation"
              id="consultation"
              label="Consultation"
            />
            <CheckBoxInput name="followUp" id="followUp" label="Follow Up" />
            <CheckBoxInput
              name="other_reason"
              id="Others"
              label="Others"
              onChange={handleCheckBox}
            />
            {values.other_reason && (
              <div className="w-full p-4 pt-1">
                <InputField
                  name="other_reason_stated"
                  placeholder="Type reason here"
                />
              </div>
            )}
          </div>
        </div>
        <div className="my-4">
          <h6 className="mb-1 font-medium">Choose prefered date</h6>
          <InputField
            type="date"
            placeholder="Choose Prefered Date"
            name="preferedDate"
            customClasses="text-grayAccent"
          />
        </div>
        <div className="my-4">
          <h6 className="mb-1 font-medium">Write Subject Matter</h6>
          <InputField placeholder="Write subject matter" name="subject" />
        </div>
        <div className="my-4">
          <h6 className="mb-1 font-medium">Describe your health condition</h6>
          <InputField
            placeholder="Describe your health condition"
            name="description"
          />
        </div>
        <div className="my-4">
          <h6 className="flex items-center mb-1 font-Poppins font-medium">
            <RiAttachment2 />
            Attachments (1)
          </h6>
          <div
            className="p-5 rounded-xl flex flex-wrap"
            style={{
              background: `linear-gradient(100.32deg, #FCF5FF -6.29%, #F5E4FF 88.21%)`,
            }}
          >
            <div
              className="w-16 h-16 rounded-xl bg-backgroundPurple flex items-center justify-center text-white m-1"
              style={{
                backgroundImage: `url(${image1})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></div>

            <div className="w-16 h-16 rounded-xl bg-backgroundPurple flex items-center justify-center text-white m-1">
              +
            </div>
          </div>
        </div>
        <div className="my-4">
          <p className="text-sm font-Poppins">
            <strong className="text-red">Note: </strong> This may not
            necessarily be the date on which the consultation may take place for
            it depends on the availabilty of the doctor. The doctor can accept
            or schedule another day for the appointment which will pop up in the
            notification and you (the patient) can accept of decline the
            appointment.
          </p>
          <div className="text-right mt-5">
            <DecoratedButton
              color="accent"
              hoverColor="primary"
              className="rounded-lg"
              onClick={() => navigate("/appointment/payment")}
            >
              Proceed to Payment
            </DecoratedButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
