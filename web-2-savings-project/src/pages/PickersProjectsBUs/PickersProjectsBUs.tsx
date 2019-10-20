import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Button } from "@material-ui/core";
import {
  TableSavingsTracker,
  PickersBusinessUnits,
  PickersProjects
} from "../../components";
import { DatePicker } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import getTime from "date-fns/getTime";

export const PickersProjectsBUs: React.FC<{}> = props => {
  const [projectIds, setProjectIds] = useState<string[]>([]);
  const [businessUnitIds, setBusinessUnitIds] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

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
      <Formik
        initialValues={{ projectIds: [], businessUnitIds: [] }}
        onSubmit={values => {
          setProjectIds(values.projectIds);
          setBusinessUnitIds(values.businessUnitIds);
        }}
        render={({ values }) => (
          <Form>
            <DatePicker value={startDate} onChange={handleStartDateChange} />
            <DatePicker value={endDate} onChange={handleEndDateChange} />
            <PickersProjects />
            <PickersBusinessUnits />
            <Button type="submit">Create Report</Button>
          </Form>
        )}
      />
      <TableSavingsTracker
        projectIds={projectIds}
        businessUnitIds={businessUnitIds}
        startPeriod={`${getTime(startDate)}`}
        endPeriod={`${getTime(endDate)}`}
      />
    </>
  );
};
