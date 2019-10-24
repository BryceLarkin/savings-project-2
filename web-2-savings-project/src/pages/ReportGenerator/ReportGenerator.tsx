import React, { useState } from "react";
import {
  TableReport,
  PickerDataType,
  TransferListBusinessUnits,
  PickerKeyboardDate
} from "../../components";
import { Formik } from "formik";
import { Button, Typography } from "@material-ui/core";
import {
  ReportDataType,
  ReportDataTableInput
} from "../../gql/__generated__/graphql-global-types";
import { TransferListProjects } from "../../components";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { useStyles } from "./reportGeneratorStyles";

const initValues: ReportGeneratorValues = {
  dataType: "",
  businessUnitIds: [""],
  projectIds: [""]
};

interface ReportGeneratorValues {
  dataType: ReportDataType | "";
  businessUnitIds: string[];
  projectIds: string[];
}

const initState: ReportDataTableInput = {
  dataType: ReportDataType.ActualSavings,
  businessUnitIds: [],
  projectIds: [],
  startPeriod: `${new Date().getTime()}`,
  endPeriod: `${new Date().getTime()}`
};

export const ReportGenerator: React.SFC<{}> = props => {
  const [reportGeneratorValues, setReportGeneratorValaues] = useState<
    ReportDataTableInput
  >(initState);
  const [projectIds, setProjectIds] = useState<string[]>([]);
  const [businessUnitIds, setBusinessUnitIds] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const classes = useStyles();

  const handleProjectChange = (left: string[], right: string[]) => {
    setProjectIds(right);
  };

  const handleBusinessUnitChange = (left: string[], right: string[]) => {
    setBusinessUnitIds(right);
  };

  const handleStartDateChange = (date: MaterialUiPickersDate) => {
    const typedDate = date as Date;
    setStartDate(typedDate);
  };

  const handleEndDateChange = (date: MaterialUiPickersDate) => {
    const typedDate = date as Date;
    setEndDate(typedDate);
  };

  return (
    <>
      <Formik<ReportGeneratorValues>
        initialValues={initValues}
        onSubmit={values => {
          if (values.dataType === "") {
            throw new Error("Invalid Data Type");
          } else {
            setReportGeneratorValaues({
              dataType: values.dataType,
              projectIds,
              businessUnitIds,
              startPeriod: `${startDate.getTime()}`,
              endPeriod: `${endDate.getTime()}`
            });
          }
        }}
        render={({ submitForm }) => {
          return (
            <div className={classes.root}>
              <div className={classes.titleContent}>
                <Typography>Data Type</Typography>
                <PickerDataType name="dataType" />
              </div>
              <div className={classes.titleContent}>
                <Typography>Time Period</Typography>
                <div className={classes.datePickers}>
                  <PickerKeyboardDate
                    value={startDate}
                    onChange={handleStartDateChange}
                    label="Start (inclusive)"
                  />
                  <PickerKeyboardDate
                    value={endDate}
                    onChange={handleEndDateChange}
                    label="End (inclusive)"
                  />
                </div>
              </div>
              <div className={classes.titleContent}>
                <Typography>Business Units</Typography>
                <TransferListBusinessUnits
                  onChange={handleBusinessUnitChange}
                />
              </div>
              <div className={classes.titleContent}>
                <Typography>Projects</Typography>
                <TransferListProjects onChange={handleProjectChange} />
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
    </>
  );
};
