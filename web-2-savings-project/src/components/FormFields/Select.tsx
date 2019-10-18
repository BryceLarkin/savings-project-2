import React from "react";
import { Field, useField } from "formik";
import { TextField } from "formik-material-ui";
import { TextFieldProps } from "./textFieldProps";

// interface SelectProps extends TextFieldProps {
//   value: any;
// }

export const Select: React.FC<TextFieldProps> = ({
  name,
  label,
  dataCy,
  children,
  ...rest
}) => {
  const [field] = useField(name);

  return (
    <Field
      name={name}
      label={label}
      data-cy={dataCy}
      component={TextField}
      style={{ width: 200 }}
      value={field.value}
      {...rest}
      select
      // variant="outlined"
    >
      {children}
    </Field>
  );
};
