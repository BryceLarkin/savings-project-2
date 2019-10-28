import React from "react";
import { Formik, Form, Field } from "formik";
import { PickerUser } from "../../PickerUser";
import { BtnSubmit } from "../../BtnSubmit";
import { TextField } from "formik-material-ui";
import { useFormStyle } from "../../Theme";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_PROJECT } from "../../../gql";
import {
  CreateProject,
  CreateProjectVariables
} from "../../../gql/__generated__/CreateProject";
import { CreateProjectInput } from "../../../gql/__generated__/graphql-global-types";
import { useHistory } from "react-router-dom";
import { Paper } from "../../Paper";

export const FormCreateProjectOverview: React.FC<{
  nextPath: (projectUrl: string) => string;
}> = ({ nextPath }) => {
  const [createProject] = useMutation<CreateProject, CreateProjectVariables>(
    CREATE_PROJECT
  );

  const history = useHistory();

  const classes = useFormStyle();
  return (
    <Formik<CreateProjectInput>
      initialValues={{ name: "", ownerId: "" }}
      onSubmit={async input => {
        const res = await createProject({ variables: { input } });
        if (res.errors) {
          console.log(res.errors);
        }

        if (res.data) {
          const { url } = res.data.createProject;
          history.push(nextPath(url));
        }
      }}
      render={props => (
        <Paper>
          <Form className={classes.root}>
            <Field
              name="name"
              label="Project Name"
              inputProps={{ "data-cy": "name-input" }}
              variant="outlined"
              component={TextField}
              className={classes.mdTextField}
            />
            <PickerUser name="ownerId" label="Owner" />
            <BtnSubmit
              handleSubmit={props.submitForm}
              disabled={props.isSubmitting}
            >
              Create Project
            </BtnSubmit>
          </Form>
        </Paper>
      )}
    />
  );
};
