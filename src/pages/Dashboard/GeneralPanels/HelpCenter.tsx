import React, { useState } from "react";
import { InputField } from "./../../../components/InputField/InputField";
import { DecoratedButton } from "@components";
import FeedbackModal from "src/components/Modal/FeedbackModal";
import Faqs from "./Faqs/Faqs";

const HelpCenter = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });
  const handleOnChange = (event: any) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <div className="w-full p-3 rounded pb-20">
      <h3 className="text-primary font-bold text-2xl mb-5 text-center">
        MedAtlas Help Center
      </h3>

      <div className="w-full flex items-start px-5">
        <div className="w-2/3 pr-5">
          <h4 className="text-primary font-semibold text-lg">
            Frequently Asked Questions (FAQs)
          </h4>
          <Faqs />
        </div>
        <div className="w-1/3">
          <div className="my-3 rounded-md w-full shadow-md">
            <div className="bg-primary text-white p-2 text-center rounded-t-md">
              <h2 className="font-bold text-xl">Inquiry Form</h2>
            </div>
            <form className="bg-white p-3 rounded-b-md">
              <div className="flex flex-col gap-2 mb-2">
                <label
                  htmlFor="type of doctor"
                  className="text-primary mb-1 font-semibold"
                >
                  Subject
                </label>
                <InputField
                  type="text"
                  placeholder="Type here"
                  name="subject"
                  value={values.subject}
                  onChange={handleOnChange}
                />
              </div>

              <div className="flex flex-col gap-2 mb-2">
                <label
                  htmlFor="type of doctor"
                  className="text-primary mb-1 font-semibold"
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  onChange={handleOnChange}
                  className="textarea textarea-primary box-border border border-gray w-full rounded-lg select-none text-gray-700 leading-tight py-2 px-3 focus:outline-none focus:border-primary mr-2 font-Poppins"
                  placeholder="Type your inquiry here"
                ></textarea>
              </div>
              <div className="flex items-center justify-center mt-6">
                <DecoratedButton
                  hoverColor="accent"
                  color="primary"
                  className="px-4 py-1 w-1/2"
                >
                  Send
                </DecoratedButton>
              </div>
            </form>
          </div>
          <FeedbackModal />
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
