import React, { useState } from "react";
import { InputField } from "./../../../components/InputField/InputField";
import { DecoratedButton } from "@components";

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
    <div className="w-full bg-backgroundSidebar p-3 rounded pb-20">
      <h3 className="text-primary font-semibold text-2xl mb-5">
        MedAtlas Help Center
      </h3>

      <div className="my-3 bg-white p-5 rounded-md w-142">
        <h2 className="text-primary font-bold text-xl mb-5">Inquiry Form</h2>
        <form>
          <div className="flex gap-2 mb-2 items-center">
            <label
              htmlFor="type of doctor"
              className="text-primary mb-1 font-semibold w-1/5"
            >
              Name
            </label>
            <InputField
              type="text"
              placeholder="Name"
              name="name"
              value={values.name}
              onChange={handleOnChange}
            />
          </div>
          <div className="flex gap-2 mb-2 items-center">
            <label
              htmlFor="type of doctor"
              className="text-primary mb-1 font-semibold w-1/5"
            >
              Email
            </label>
            <InputField
              type="text"
              placeholder="username@gmail.com"
              name="email"
              value={values.email}
              onChange={handleOnChange}
            />
          </div>
          <div className="flex gap-2 mb-2 items-center">
            <label
              htmlFor="type of doctor"
              className="text-primary mb-1 font-semibold w-1/5"
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

          <div className="flex gap-2 mb-2 items-center">
            <label
              htmlFor="type of doctor"
              className="text-primary mb-1 font-semibold w-1/5"
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
              hoverColor="primary"
              color="accent"
              className="px-4 py-1 w-1/2"
            >
              Send
            </DecoratedButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HelpCenter;
