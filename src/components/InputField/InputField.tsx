import React from "react";

interface InputFieldProps {
  type?: any;
  placeholder: any;
  value?: any;
  name: any;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  customClasses?: string;
  required?: boolean;
}

interface RadioFieldProps {
  label?: string;
  name: string;
  value?: any;
  id: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  value,
  name,
  disabled,
  onChange,
  customClasses,
  required,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      required={required ? true : false}
      onChange={onChange}
      name={name}
      disabled={disabled}
      className={`appearance-none box-border border border-gray w-full rounded-lg select-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary mr-2 font-Poppins ${customClasses}`}
    />
  );
};

export const RadioInput: React.FC<RadioFieldProps> = ({
  name,
  label,
  value,
  id,
  onChange,
}) => {
  return (
    <div className="form-check form-check-inline">
      <input
        className="form-check-input form-check-input rounded-full h-4 w-4 border border-gray bg-white checked:bg-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
      <label
        className="form-check-label inline-block font-Poppins text-primary"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export const CheckBoxInput: React.FC<RadioFieldProps> = ({
  label,
  value,
  id,
  onChange,
  name,
}) => {
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
        className="form-check-label inline-block font-Poppins text-primary"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};
