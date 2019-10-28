import React from "react";
import { useField, useFormikContext } from "formik";
import { DatePicker } from "@material-ui/pickers";

export const PickerMonth: React.FC<{ name: string; label: string }> = ({
  name,
  label,
  ...rest
}) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext<any>();

  return (
    <DatePicker
      inputVariant="outlined"
      views={["year", "month"]}
      label={label}
      error={!!meta.error}
      helperText={!!meta.error ? meta.error : ""}
      onChange={value => setFieldValue(name, value)}
      value={field.value}
      {...rest}
    />
  );
};
