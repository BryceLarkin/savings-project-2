import React from "react";
import NumberFormat from "react-number-format";
import { TextField } from "@material-ui/core";
import { useField, useFormikContext } from "formik";

interface NumberFormatCustomProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { value: string } }) => void;
}

function NumberFormatCustom(props: NumberFormatCustomProps) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value
          }
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
}

export const TextFieldCurrency: React.FC<{ name: string; label: string }> = ({
  name,
  label
}) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext<any>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    const checkedValue = Number.isNaN(value) ? 0 : value;
    setFieldValue(name, checkedValue);
  };

  return (
    <TextField
      variant="outlined"
      label={label}
      value={field.value}
      onChange={handleChange}
      error={!!meta.error}
      helperText={!!meta.error ? meta.error : ""}
      InputProps={{
        inputComponent: NumberFormatCustom as any
      }}
      inputProps={{
        style: { textAlign: "right" }
      }}
    />
  );
};
