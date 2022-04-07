import React from "react";

interface InputFieldProps {
  type: any;
  placeholder: any;
//   variant: string;
//   value: any;
//   name: any;
//   disabled: boolean;
//   onChange: any;
//   fullwidth: boolean;
}

export const InputField = (props: InputFieldProps) => {
  const {
    type,
    placeholder,
    // variant,
    // value,
    // name,
    // disabled,
    // onChange,
    // fullwidth,
  } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="appearance-none border border-primary w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-primary focus:shadow-outline mr-2"
    />
  );
};
