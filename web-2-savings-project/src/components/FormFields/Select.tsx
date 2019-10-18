import React from "react";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import { TextFieldProps } from "./textFieldProps";

interface SelectProps extends TextFieldProps {
  value: any;
}

export const Select: React.SFC<SelectProps> = ({
  name,
  label,
  dataCy,
  children,
  value,
  ...rest
}) => (
  <Field
    name={name}
    label={label}
    data-cy={dataCy}
    component={TextField}
    style={{ width: 200 }}
    value={value}
    {...rest}
    select
    // variant="outlined"
  >
    {children}
  </Field>
);
