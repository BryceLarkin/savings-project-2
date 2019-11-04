import React from "react";
import { useField, useFormikContext } from "formik";
import { TextField as MuiTextField } from "@material-ui/core";

export const TextField: React.FC<{
  name: string;
  dataCy: string;
  label: string;
  width?: number;
  type?: "email" | "password" | "text" | "url" | "tel" | "search" | "number";
}> = ({ name, label, dataCy = "text-field", type = "text", width = 200 }) => {
  const [{ value }, meta] = useField(name);
  const { setFieldValue, setFieldTouched } = useFormikContext<any>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(name, event.target.value);
  };

  const handleBlur = () => {
    setFieldTouched(name, true);
  };

  return (
    <MuiTextField
      label={label}
      data-cy={dataCy}
      style={{ width }}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      error={!!meta.error}
      helperText={meta.error ? meta.error : ""}
      variant="outlined"
      type={type}
    />
  );
};
