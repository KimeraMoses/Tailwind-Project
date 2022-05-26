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
import { MdVerified } from "react-icons/md";
import Rating from "@mui/material/Rating";
import imageDr from "../../../../assets/doctor-01.png";

export const doctorAvailability = [
  {
    id: 1,
    date: "Monday 21 April, 2022",
    timeSlots: [
      {
        id: 1.1,
        fromTime: "10: 00am",
        toTime: "11:00pm",
      },
      {
        id: 1.2,
        fromTime: "12: 30am",
        toTime: "2:00pm",
      },
    ],
  },
  {
    id: 2,
    date: "Thursday 23 April, 2022",
    timeSlots: [
      {
        id: 2.1,
        fromTime: "10: 00 am",
        toTime: "11:00 pm",
      },
      {
        id: 2.2,
        fromTime: "12: 30 am",
        toTime: "2:00 pm",
      },
    ],
  },
  {
    id: 3,
    date: "Saturday 26 April, 2022",
    timeSlots: [
      {
        id: 3.1,
        fromTime: "10: 00 am",
        toTime: "11:00 pm",
      },
      {
        id: 3.2,
        fromTime: "12: 30 am",
        toTime: "2:00 pm",
      },
    ],
  },
];

export const DoctorMinCard = () => {
  return (
    <div className="flex shadow rounded-xl">
      <img src={imageDr} alt="" className="shadow-md rounded-xl w-40 h-40" />
      <div className="flex flex-col ml-3">
        <h2 className="font-bold text-primary text-xl mb-2 flex items-center">
          Dr. Margret Mutumba
          <MdVerified
            className="text-accent ml-1"
            title="Doctors Document Verified"
          />
        </h2>
        <h6 className="text-sm font-normal mb-1">
          English, Luganda, Kiswahili
        </h6>
        <p className="text-accent text-sm font-medium">Fertilty</p>
        <Rating
          name="read-only"
          value={3.6}
          precision={0.5}
          readOnly
          className="mt-5"
        />
      </div>
    </div>
  );
};

export const FileUpload: React.FC<{ isPreview?: boolean }> = ({
  isPreview,
}) => {
  return (
    <div className="my-4">
      <h6 className="flex items-center mb-1 font-Poppins font-medium">
        <RiAttachment2 />
        Attachments ({isPreview ? "2" : "1"})
      </h6>
      <div
        className="p-5 rounded-xl flex flex-wrap"
        style={{
          background: `linear-gradient(100.32deg, #FCF5FF -6.29%, #F5E4FF 88.21%)`,
        }}
      >
        <div className="flex flex-col justify-center items-center mr-3">
          <div
            className="w-16 h-16 rounded-xl bg-backgroundPurple flex items-center justify-center text-white m-1"
            style={{
              backgroundImage: `url(${image1})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
          <p>Healthydocument.png</p>
        </div>

        {isPreview ? (
          <div className="flex flex-col justify-center items-center">
            <div
              className="w-16 h-16 rounded-xl bg-backgroundPurple flex items-center justify-center text-white m-1"
              style={{
                backgroundImage: `url(${image1})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></div>
            <p>userdocument.png</p>
          </div>
        ) : (
          <div className="w-16 h-16 rounded-xl bg-backgroundPurple flex items-center justify-center text-white m-1">
            +
          </div>
        )}
      </div>
    </div>
  );
};

const BookingForm: React.FunctionComponent = () => {
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
      <div className="my-2">
        <DoctorMinCard />
        <div className="my-3">
          <h4 className="text-base font-medium text-primary">
            Doctors Availability Schedule{" "}
            <strong className="text-accent">(Fixed)</strong>
          </h4>
          <div className="my-2 flex flex-wrap">
            {doctorAvailability.map((item) => {
              return (
                <div className="w-1/3 my-2  text-primary" key={item.id}>
                  <h4 className="font-semibold text-base mb-2">{item.date}</h4>
                  <ul>
                    {item.timeSlots.map((time) => {
                      return (
                        <li className="text-sm font-normal" key={time.id}>
                          {time.fromTime} - {time.toTime}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <form className="select-none font-Poppins">
        <div className="flex gap-3 my-4">
          <InputField placeholder="Name" name="name" />
          <InputField placeholder="Email Address" name="email" type="email" />
        </div>
        <div className="flex gap-3 my-4">
          <select className="form-select block box-border border border-gray w-full rounded-lg select-none py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary mr-2 font-Poppins transition ease-in-out">
            <option>In Person</option>
            <option>Online (Google Meet)</option>
            <option>Online (WhatsApp)</option>
          </select>
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
        <FileUpload />

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
