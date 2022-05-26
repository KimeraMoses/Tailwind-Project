import React, { useCallback, useState, useRef } from "react";
import { InputField } from "./../InputField/InputField";
import { DecoratedButton } from "@components";

const ContactForm: React.FunctionComponent = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = useCallback((event: React.SyntheticEvent) => {
    const { value, name } = event.target as HTMLInputElement;
    setValues({ ...values, [name]: value });
  }, []);

  return (
    <form ref={formRef} className="w-full">
      <div className="my-2">
        <label className="text-base text-primary font-medium mb-1">
          Full Name
        </label>
        <InputField
          name="name"
          placeholder="Full Name"
          type="text"
          required
          onChange={onChange}
        />
      </div>
      <div className="my-2">
        <label className="text-base text-primary font-medium mb-1">Email</label>
        <InputField
          name="email"
          placeholder="Email"
          type="email"
          required
          onChange={onChange}
        />
      </div>
      <div className="my-2">
        <label className="text-base text-primary font-medium mb-1">
          Message
        </label>
        <textarea
          onChange={onChange}
          name="message"
          rows={4}
          className="textarea textarea-primary box-border border border-gray w-full rounded-lg select-none text-gray-700 leading-tight py-2 px-3 focus:outline-none focus:border-primary mr-2 font-Poppins"
          placeholder="Type here"
        ></textarea>
      </div>
      <div className="flex justify-center my-4">
        <DecoratedButton
          disabled={!formRef.current?.checkValidity()}
          color="accent"
          hoverColor="primary"
          className="w-1/2 px-6 py-2"
          type="submit"
        >
          Submit
        </DecoratedButton>
      </div>
    </form>
  );
};

export default ContactForm;
