import React from "react";

interface InputFieldProps {
  type: any;
  placeholder: any;
  value: any;
  name: any;
  disabled: boolean;
  onChange: any;
}

export const InputField = (props: InputFieldProps) => {
  const { type, placeholder, value, name, disabled, onChange } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      disabled={disabled}
      className="appearance-none box-border border border-primary w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-primary focus:border-0 mr-2"
    />
  );
};
