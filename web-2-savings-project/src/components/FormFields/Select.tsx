import React from "react";
import { useField, useFormikContext } from "formik";
import { TextField } from "@material-ui/core";
import { TextFieldProps } from "./textFieldProps";

interface SelectProps extends TextFieldProps {
  width?: number;
  multiple?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  name,
  label,
  dataCy,
  children,
  width = 200,
  multiple = false,
  ...rest
}) => {
  const [field, meta] = useField<string>(name);
  const { setFieldValue } = useFormikContext<any>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(name, event.target.value);
  };

  return (
    <TextField
      label={label}
      data-cy={dataCy}
      style={{ width }}
      value={field.value}
      SelectProps={{
        multiple
      }}
      onChange={handleChange}
      error={!!meta.error}
      helperText={meta.error ? meta.error : ""}
      {...rest}
      select
      variant="outlined"
    >
      {children}
    </TextField>
  );
};
