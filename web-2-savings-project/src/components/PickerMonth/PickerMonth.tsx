import React from "react";
import { useField, useFormikContext } from "formik";
import { KeyboardDatePicker } from "@material-ui/pickers";

export const PickerMonth: React.FC<{
  name: string;
  label: string;
  dataCy?: string;
}> = ({ name, label, dataCy = "picker-month", ...rest }) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext<any>();

  return (
    <KeyboardDatePicker
      autoOk
      data-cy={dataCy}
      inputVariant="outlined"
      variant="inline"
      views={["year", "month"]}
      label={label}
      format="MM/yyyy"
      error={!!meta.error}
      helperText={!!meta.error ? meta.error : ""}
      onChange={value => setFieldValue(name, value)}
      value={field.value}
      {...rest}
    />
  );
};
