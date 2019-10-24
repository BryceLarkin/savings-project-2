import React from "react";
import {
  KeyboardDatePicker,
  MaterialUiPickersDate
} from "@material-ui/pickers";

export const PickerKeyboardDate: React.SFC<{
  value: Date;
  onChange: (date: MaterialUiPickersDate) => void;
  label: string;
}> = ({ value, onChange, label }) => {
  return (
    <KeyboardDatePicker
      inputVariant="outlined"
      value={value}
      onChange={onChange}
      format="MM/dd/yyyy"
      variant="inline"
      label={label}
    />
  );
};
