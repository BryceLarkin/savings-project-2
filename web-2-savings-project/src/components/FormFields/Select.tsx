import React from "react";
import { Field, useField } from "formik";
import { TextField } from "formik-material-ui";
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
  const [field] = useField(name);

  return (
    <Field
      name={name}
      label={label}
      data-cy={dataCy}
      component={TextField}
      style={{ width }}
      value={field.value}
      multiple
      {...rest}
      select
      variant="outlined"
    >
      {children}
    </Field>
  );
};
