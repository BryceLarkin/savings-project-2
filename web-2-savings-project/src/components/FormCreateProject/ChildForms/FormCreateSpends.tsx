import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { BtnSubmit } from "../../BtnSubmit";
import { CREATE_SPENDS, READ_PROJECT_PROFILE_NAMES } from "../../../gql";
import {
  CreateSpends,
  CreateSpendsVariables
} from "../../../gql/__generated__/CreateSpends";
import {
  ReadProjectProfileNames,
  ReadProjectProfileNamesVariables
} from "../../../gql/__generated__/ReadProjectProfileNames";
import { useParams } from "react-router-dom";
import { R } from "../../../constants";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { useFormStyle } from "../../Theme";
import { Loading } from "../../Loading";
import { Typography } from "@material-ui/core";
import { CreateSpendsInput } from "../../../gql/__generated__/graphql-global-types";
import { Paper } from "../../Paper";
import { TextFieldCurrency } from "../../FormFields";
import { PickerMonth } from "../../PickerMonth";

export const FormCreateSpends: React.FC<{}> = props => {
  const { projectUrl } = useParams<R.PROFILES_PARAMS>();
  const [createSpends] = useMutation<CreateSpends, CreateSpendsVariables>(
    CREATE_SPENDS
  );
  const { data, loading, error } = useQuery<
    ReadProjectProfileNames,
    ReadProjectProfileNamesVariables
  >(READ_PROJECT_PROFILE_NAMES, {
    variables: { where: { project: { url: { equals: projectUrl } } } }
  });
  const classes = useFormStyle();

  if (loading) return <Loading />;

  if (error) return <Typography>Error: {error.message}</Typography>;
  if (!data) return <Typography>No project profiles found.</Typography>;

  const initSpend: CreateSpendsInput[] = data.projectProfiles.map(profile => ({
    projectProfileId: profile.id,
    spendAmountsAndDates: [
      {
        month: new Date().toISOString(),
        baselineSpend: 0,
        forecastedSavings: 0
      }
    ]
  }));

  const initialValues: CreateSpendsVariables = {
    input: initSpend
  };

  return (
    <Formik<CreateSpendsVariables>
      initialValues={initialValues}
      onSubmit={input => {
        console.log(input);
      }}
      render={({ values, submitForm, isSubmitting }) => (
        <Paper>
          <Form className={classes.root}>
            {values.input.map((profile, i) => (
              <div key={i}>
                <Typography>
                  {data.projectProfiles[i].businessUnit.name}
                </Typography>
                <FieldArray
                  name={`input.${i}.spendAmountsAndDates`}
                  render={arrayHelpers => {
                    const { spendAmountsAndDates } = values.input[i];
                    return (
                      <>
                        {spendAmountsAndDates &&
                        spendAmountsAndDates.length > 0 ? (
                          spendAmountsAndDates.map((spend, spendIndex) => (
                            <div key={`${i}-${spendIndex}`}>
                              <PickerMonth
                                name={`input.${i}.spendAmountsAndDates.${spendIndex}.month`}
                                label="Month"
                              />
                              <TextFieldCurrency
                                name={`input.${i}.spendAmountsAndDates.${spendIndex}.baselineSpend`}
                                label="Baseline Spend"
                              />
                              <TextFieldCurrency
                                name={`input.${i}.spendAmountsAndDates.${spendIndex}.forecastedSavings`}
                                label="Forecasted Savings"
                              />
                            </div>
                          ))
                        ) : (
                          <div>Test</div>
                        )}
                      </>
                    );
                  }}
                />
              </div>
            ))}
          </Form>
        </Paper>
      )}
    />
  );
};
