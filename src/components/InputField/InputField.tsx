import React from "react";

interface InputFieldProps {
  type?: any;
  placeholder: any;
  value?: any;
  name: any;
  disabled?: boolean;
  onChange?: any;
  customClasses?: string;
}

interface RadioFieldProps {
  label: string;
  name: string;
  value?: any;
  id: any;
  onChange?: any;
}

export const InputField = (props: InputFieldProps) => {
  const { type, placeholder, value, name, disabled, onChange, customClasses } =
    props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      disabled={disabled}
      className={`appearance-none box-border border border-gray w-full rounded-lg select-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary mr-2 font-Poppins ${customClasses}`}
    />
  );
};

export const RadioInput = (props: RadioFieldProps) => {
  const { name, label, value, id } = props;
  return (
    <div className="form-check form-check-inline">
      <input
        className="form-check-input form-check-input rounded-full h-4 w-4 border border-gray bg-white checked:bg-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="radio"
        name={name}
        id={id}
        value={value}
      />
      <label
        className="form-check-label inline-block font-Poppins"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export const CheckBoxInput = (props: RadioFieldProps) => {
  const { label, value, id, onChange, name } = props;
  return (
    <div className="form-check">
      <input
        className="form-check-input h-4 w-4 border border-gray rounded-sm bg-white checked:bg-primary checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        value={value}
        name={name}
        onChange={onChange}
        id={id}
      />
      <label
        className="form-check-label inline-block font-Poppins"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};
