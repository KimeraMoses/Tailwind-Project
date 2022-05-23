import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import { Paper } from "@mui/material";

interface TimeProps {
  time: any;
  setTime: any;
}

const TimePicker: React.FC<TimeProps> = ({ time, setTime }) => {
  // const { time, setTime } = props;
  return (
    <Paper elevation={2}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticTimePicker
          ampm
          orientation="landscape"
          openTo="minutes"
          value={time}
          onChange={(newValue) => {
            setTime(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Paper>
  );
};

export default TimePicker;
