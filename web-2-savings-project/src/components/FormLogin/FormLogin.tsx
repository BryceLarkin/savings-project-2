import React from "react";
import { TextField } from "../FormFields";
import { makeStyles, createStyles } from "@material-ui/core";
import { ITheme } from "../Theme";
import { BtnSubmit } from "../BtnSubmit";
import { R } from "../../constants";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import { firebase } from "../../services";
import * as yup from "yup";

enum LoginErrors {
  InvalidEmail = "auth/invalid-email",
  UserDisabled = "auth/user-disabled",
  UserNotFound = "auth/user-not-found",
  WrongPassword = "auth/wrong-password"
}

interface LoginValues {
  email: string;
  password: string;
}

const schema: yup.ObjectSchema<LoginValues> = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("Required"),
  password: yup
    .string()
    .min(6, "Min 6 characters")
    .required("Required")
});

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gridRowGap: "1em"
    }
  })
);

export const FormLogin: React.SFC<{}> = props => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <Formik<LoginValues>
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={schema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={async ({ email, password }, { setErrors, setSubmitting }) => {
        try {
          const userCredential = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);

          if (userCredential.user === null) {
            throw new Error("User does not exist");
          }

          history.push(R.HOME);
        } catch (e) {
          setSubmitting(false);

          switch (e.code) {
            case LoginErrors.UserNotFound:
              setErrors({ email: "Email not found" });
              break;
            case LoginErrors.InvalidEmail:
              setErrors({ email: "Invalid email" });
              break;
            case LoginErrors.UserDisabled:
              setErrors({
                email: "User disabled. Contact network administrator"
              });
              break;
            case LoginErrors.WrongPassword:
              setErrors({ password: "Incorrect password" });
              break;
            default:
              setErrors({ email: "Error logging in", password: " " });
              break;
          }
        }
      }}
      render={({ isSubmitting, submitForm }) => (
        <div className={classes.root}>
          <TextField label="Email" dataCy="email" name="email" type="email" />
          <TextField
            label="Password"
            dataCy="password"
            name="password"
            type="password"
          />
          <BtnSubmit disabled={isSubmitting} handleSubmit={submitForm}>
            Login
          </BtnSubmit>
        </div>
      )}
    />
  );
};
