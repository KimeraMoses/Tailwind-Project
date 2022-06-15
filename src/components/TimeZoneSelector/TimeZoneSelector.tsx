import { useCallback, useState } from "react";
import { useTimeZoneUpdateReducer } from "@hooks";
import { TimeZoneList } from "@constants";

/* eslint-disable react/prop-types */

export const TimeZoneSelector: React.FunctionComponent<PropTypes> = ({
  onChange,
  className,
  ...props
}) => {
  const [initialTimeZone, updateTimeZone] = useTimeZoneUpdateReducer();

  const [timeZone, setTimeZone] = useState(initialTimeZone);

  const onTimeZoneChange = useCallback(
    async (event) => {
      const target = event.target as HTMLInputElement;
      const value = target.value as string;

      const newTimeZone = await updateTimeZone(value);
      setTimeZone(newTimeZone);
      onChange && onChange(newTimeZone);
    },
    [updateTimeZone, onChange]
  );

  return (
    <select
      onChange={onTimeZoneChange}
      value={timeZone}
      className={`form-select block box-border border border-gray w-full rounded-lg select-none py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary font-Poppins transition ease-in-out max-w-540 ${
        className || ""
      }`}
      required
      name="timeZone"
      {...props}
    >
      {TimeZoneList.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

type PropTypes = {
  onChange?: (timeZone: string) => void;
  className?: string;
};
