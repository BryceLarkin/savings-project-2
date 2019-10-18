import { TextFieldProps as FormikTextFieldProps } from "formik-material-ui";

export interface TextFieldProps extends Partial<FormikTextFieldProps> {
  name: string;
  label: string;
  dataCy: string;
}
