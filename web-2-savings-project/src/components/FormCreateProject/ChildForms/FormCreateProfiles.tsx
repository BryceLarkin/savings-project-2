import React from "react";
import { Formik, Form, FieldArray } from "formik";
import { CREATE_PROJECT_PROFILES } from "../../../gql";
import {
  CreateProjectProfiles,
  CreateProjectProfilesVariables
} from "../../../gql/__generated__/CreateProjectProfiles";
import { useHistory, useParams } from "react-router-dom";
import { Paper } from "../../Paper";
import { useMutation } from "@apollo/react-hooks";
import { R } from "../../../constants";
import { useFormStyle } from "../../Theme";
import {
  CreateProjectProfilesInput,
  CreateProjectProfileInput
} from "../../../gql/__generated__/graphql-global-types";
import { PickerBusinessUnits } from "../../PickerBusinessUnits";
import { Button } from "@material-ui/core";
import { BtnSubmit } from "../../BtnSubmit";
import * as Yup from "yup";

const ProfileSchema = Yup.object().shape<CreateProjectProfilesInput>({
  projectUrl: Yup.string().required("Required"),
  projectProfiles: Yup.array().of(
    Yup.object().shape<CreateProjectProfileInput>({
      businessUnitId: Yup.string().required("Required")
    })
  )
});

export const FormCreateProfiles: React.FC<{
  nextPath: (projectUrl: string) => string;
}> = ({ nextPath }) => {
  const [createProfiles] = useMutation<
    CreateProjectProfiles,
    CreateProjectProfilesVariables
  >(CREATE_PROJECT_PROFILES);
  const { projectUrl } = useParams<R.PROJECT_PARAMS>();
  const classes = useFormStyle();
  const history = useHistory();

  return (
    <Formik<CreateProjectProfilesInput>
      initialValues={{
        projectUrl,
        projectProfiles: [{ businessUnitId: "" }]
      }}
      validationSchema={ProfileSchema}
      onSubmit={async input => {
        const res = await createProfiles({ variables: { input } });
        if (res.errors) {
          console.log(res.errors);
        }

        if (res.data) {
          history.push(nextPath(projectUrl));
        }
      }}
      render={({ values, submitForm, isSubmitting }) => (
        <Paper>
          <Form className={classes.root}>
            <FieldArray
              name="projectProfiles"
              render={arrayHelpers => (
                <>
                  {values.projectProfiles &&
                  values.projectProfiles.length > 0 ? (
                    <div className={classes.root}>
                      {values.projectProfiles.map((profile, i) => (
                        <div key={i} className={classes.root}>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <PickerBusinessUnits
                              name={`projectProfiles.${i}.businessUnitId`}
                            />
                            <Button
                              onClick={() => arrayHelpers.remove(i)}
                              data-cy="remove-business-unit-icon"
                            >
                              -
                            </Button>
                            <Button
                              onClick={() =>
                                arrayHelpers.push({ businessUnitId: "" })
                              }
                              data-cy="add-business-unit-icon"
                            >
                              +
                            </Button>
                          </div>
                        </div>
                      ))}
                      <BtnSubmit
                        handleSubmit={submitForm}
                        disabled={isSubmitting}
                      >
                        Create Project Profiles
                      </BtnSubmit>
                    </div>
                  ) : (
                    <Button
                      variant="outlined"
                      onClick={() => arrayHelpers.push({ businessUnitId: "" })}
                      data-cy="add-business-unit-btn"
                    >
                      Add a Business Unit
                    </Button>
                  )}
                </>
              )}
            />
          </Form>
        </Paper>
      )}
    />
  );
};
