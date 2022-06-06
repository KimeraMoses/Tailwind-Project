import React, { useState } from "react";
import { InputField } from "./../../../components/InputField/InputField";
import { DecoratedButton } from "@components";
import FeedbackModal from "src/components/Modal/FeedbackModal";
import Faqs from "./Faqs/Faqs";
import { Footer } from "./../../../components/Footer/Footer";
import { NewsLetterSection } from "./../../../components/NewsLetterSection/NewsLetterSection";

const HelpCenter = () => {
  const [isPatient, setIsPatient] = useState(true);
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });
  const handleOnChange = (event: any) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <>
      <div className="w-full p-10 bg-background">
        <h3 className="text-primary font-bold text-2xl mb-5 text-center">
          MedAtlas Help Center
        </h3>

        <div className="w-full flex items-start px-5">
          <div className="w-2/3 pr-5">
            <h4 className="text-primary font-semibold text-lg">
              Frequently Asked Questions (FAQs)
            </h4>

            <div className="flex items-center justify-center text-white py-5">
              <div className="bg-primary p-1 rounded-[30px] flex items-center shadow-md select-none">
                <div
                  onClick={() => setIsPatient(true)}
                  className={`py-[4px] rounded-[30px] cursor-pointer ${
                    isPatient
                      ? "font-bold px-[10px] bg-accent shadow-sm"
                      : "font-semibold px-[14px]"
                  }`}
                >
                  Patients Questions
                </div>
                <div
                  onClick={() => setIsPatient(false)}
                  className={`py-[4px] rounded-[30px] cursor-pointer ${
                    !isPatient
                      ? "font-bold px-[10px] bg-accent shadow-sm"
                      : "font-semibold px-[14px]"
                  }`}
                >
                  Doctors Questions
                </div>
              </div>
            </div>
            <Faqs isPatient={isPatient} />
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
      <NewsLetterSection />
      <Footer />
    </>
  );
};

export default HelpCenter;
