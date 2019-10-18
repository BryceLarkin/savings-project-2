import React from "react";
import { PickersProjects } from "../PickersProjects";
import { PickersBusinessUnits } from "../PickersBusinessUnits";
import { Formik, Form } from "formik";
import { Button } from "@material-ui/core";

export const PickersProjectsBUs: React.SFC<{}> = props => {
  return (
    <Formik
      initialValues={{ projectIds: [], businessUnitIds: [] }}
      onSubmit={values => {
        console.log(values);
      }}
      render={({ values }) => (
        <Form>
          <PickersProjects />
          <PickersBusinessUnits />
          <Button type="submit">Create Report</Button>
        </Form>
      )}
    />
  );
};
