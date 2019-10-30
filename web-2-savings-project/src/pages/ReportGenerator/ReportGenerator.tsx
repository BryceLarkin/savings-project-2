import React, { useState } from "react";
import {
  TableReport,
  PickerDataType,
  TransferListBusinessUnits
} from "../../components";
import { Formik } from "formik";
import { Button, Typography } from "@material-ui/core";
import {
  ReportDataType,
  ReportDataTableInput
} from "../../gql/__generated__/graphql-global-types";
import { TransferListProjects } from "../../components";
import { useStyles } from "./reportGeneratorStyles";
import { PickerMonth } from "../../components/PickerMonth";

const initValues: ReportGeneratorValues = {
  dataType: ReportDataType.ForecastedSavingsAmount,
  businessUnitIds: [],
  projectIds: [],
  startPeriod: new Date(),
  endPeriod: new Date()
};

interface ReportGeneratorValues {
  dataType: ReportDataType;
  businessUnitIds: string[];
  projectIds: string[];
  startPeriod: Date;
  endPeriod: Date;
}

const initState: ReportDataTableInput = {
  dataType: ReportDataType.ActualSavings,
  businessUnitIds: [],
  projectIds: [],
  startPeriod: new Date().toISOString(),
  endPeriod: new Date().toISOString()
};

export const ReportGenerator: React.SFC<{}> = props => {
  const [reportGeneratorValues, setReportGeneratorValaues] = useState<
    ReportDataTableInput
  >(initState);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Formik<ReportGeneratorValues>
        initialValues={initValues}
        onSubmit={values => {
          setReportGeneratorValaues({
            dataType: values.dataType,
            projectIds: values.projectIds,
            businessUnitIds: values.businessUnitIds,
            startPeriod: values.startPeriod.toISOString(),
            endPeriod: values.endPeriod.toISOString()
          });
        }}
        render={({ submitForm }) => {
          return (
            <div className={classes.form}>
              <div className={classes.titleContent}>
                <Typography>Data Type</Typography>
                <PickerDataType name="dataType" />
              </div>
              <div className={classes.titleContent}>
                <Typography>Time Period</Typography>
                <div className={classes.datePickers}>
                  <PickerMonth
                    name="startPeriod"
                    label="Start"
                    dataCy="picker-month-start"
                  />
                  <PickerMonth
                    name="endPeriod"
                    label="Start"
                    dataCy="picker-month-start"
                  />
                </div>
              </div>
              <div className={classes.titleContent}>
                <Typography>Business Units</Typography>
                <TransferListBusinessUnits name="businessUnitIds" />
              </div>
              <div className={classes.titleContent}>
                <Typography>Projects</Typography>
                <TransferListProjects name="projectIds" />
              </div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={submitForm}
              >
                Generate Report
              </Button>
            </div>
          );
        }}
      />
      {reportGeneratorValues.businessUnitIds.length === 0 ||
      reportGeneratorValues.projectIds.length === 0 ? (
        <Typography>Select Project and Business Units</Typography>
      ) : (
        <TableReport input={reportGeneratorValues} />
      )}
    </div>
  );
};
