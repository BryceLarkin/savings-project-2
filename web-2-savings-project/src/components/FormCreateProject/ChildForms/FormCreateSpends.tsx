import React from "react";
import { Formik, Form, FieldArray } from "formik";
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
import { useParams, useHistory } from "react-router-dom";
import { R } from "../../../constants";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { ITheme } from "../../Theme";
import { Loading } from "../../Loading";
import {
  Typography,
  makeStyles,
  createStyles,
  Button,
  Divider
} from "@material-ui/core";
import { CreateSpendsInput } from "../../../gql/__generated__/graphql-global-types";
import { Paper } from "../../Paper";
import { TextFieldCurrency } from "../../FormFields";
import { PickerMonth } from "../../PickerMonth";
import { Currency } from "../../FormatText";

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      display: "grid",
      gridRowGap: "2em"
    },
    title: {
      paddingBottom: "2em"
    },
    spendInputsParent: {
      display: "grid",
      gridRowGap: "1em"
    },
    spendInputsRow: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(200px, 250px)) repeat(2, 64px)",
      gridColumnGap: "1em"
    },
    divider: {
      paddingTop: "1em",
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(200px, 250px)) repeat(2, 64px)",
      gridColumnGap: "1em"
    }
  })
);

export const FormCreateSpends: React.FC<{}> = props => {
  const { projectUrl } = useParams<R.PROFILES_PARAMS>();
  const history = useHistory();
  const [createSpends] = useMutation<CreateSpends, CreateSpendsVariables>(
    CREATE_SPENDS
  );
  const { data, loading, error } = useQuery<
    ReadProjectProfileNames,
    ReadProjectProfileNamesVariables
  >(READ_PROJECT_PROFILE_NAMES, {
    variables: { where: { project: { url: { equals: projectUrl } } } }
  });
  const classes = useStyles();

  if (loading) return <Loading />;

  if (error) return <Typography>Error: {error.message}</Typography>;
  if (!data) return <Typography>No project profiles found.</Typography>;

  const initSpendAmountsAndDates = {
    month: new Date().toISOString(),
    baselineSpend: 0,
    forecastedSavings: 0
  };

  const initSpend: CreateSpendsInput[] = data.projectProfiles.map(profile => ({
    projectProfileId: profile.id,
    spendAmountsAndDates: [initSpendAmountsAndDates]
  }));

  const initialValues: CreateSpendsVariables = {
    input: initSpend
  };

  return (
    <Formik<CreateSpendsVariables>
      initialValues={initialValues}
      onSubmit={async input => {
        await createSpends({ variables: input });
        history.push(R.PROJECT_FN(projectUrl));
      }}
      render={({ values, submitForm, isSubmitting }) => (
        <Form className={classes.root}>
          {values.input.map((profile, i) => (
            <Paper key={i}>
              <Typography className={classes.title}>
                {data.projectProfiles[i].businessUnit.name}
              </Typography>
              <FieldArray
                name={`input.${i}.spendAmountsAndDates`}
                render={arrayHelpers => {
                  const { spendAmountsAndDates: spend } = values.input[i];
                  const totalBaseline = spend.reduce(
                    (acc, { baselineSpend }) => acc + baselineSpend,
                    0
                  );
                  const totalForecastedSavings = spend.reduce(
                    (acc, { forecastedSavings }) => acc + forecastedSavings,
                    0
                  );
                  return (
                    <>
                      {spend && spend.length > 0 ? (
                        <div>
                          <div className={classes.spendInputsParent}>
                            {spend.map((_, spendIndex) => (
                              <div
                                key={`${i}-${spendIndex}`}
                                className={classes.spendInputsRow}
                              >
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
                                <Button
                                  onClick={() =>
                                    arrayHelpers.remove(spendIndex)
                                  }
                                >
                                  -
                                </Button>
                                <Button
                                  onClick={() =>
                                    arrayHelpers.push(initSpendAmountsAndDates)
                                  }
                                >
                                  +
                                </Button>
                              </div>
                            ))}
                          </div>
                          <div className={classes.divider}>
                            <div />
                            <Divider />
                            <Divider />
                          </div>
                          <div className={classes.divider}>
                            <div />
                            <Currency data={totalBaseline} />
                            <Currency data={totalForecastedSavings} />
                          </div>
                        </div>
                      ) : (
                        <div>Test</div>
                      )}
                    </>
                  );
                }}
              />
            </Paper>
          ))}
          <div style={{ justifySelf: "center" }}>
            <BtnSubmit handleSubmit={submitForm} disabled={isSubmitting}>
              Create Spend Data
            </BtnSubmit>
          </div>
        </Form>
      )}
    />
  );
};
