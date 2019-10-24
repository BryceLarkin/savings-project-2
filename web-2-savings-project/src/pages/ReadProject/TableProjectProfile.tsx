import React from "react";
import {
  ReadProject_project_projectProfiles,
  ReadProject_project_projectProfiles_spend
} from "../../gql/__generated__/ReadProject";
import MaterialTable, { Column } from "material-table";
import dayjs from "dayjs";

const columns: Column<ReadProject_project_projectProfiles_spend>[] = [
  {
    field: "month",
    title: "Date",
    render: row => `${dayjs(row.month).format("MMM YYYY")}`,
    type: "date"
  },
  {
    field: "forecastedSavingsAmount",
    title: "Forecasted Savings",
    type: "currency",
    currencySetting: {
      maximumFractionDigits: 0,
      minimumFractionDigits: 0
    }
  },
  {
    field: "forecastedSavingsPercentage",
    title: "Forecasted Savings %",
    type: "numeric",
    render: row => `${row.forecastedSavingsPercentage}%`
  },
  {
    field: "baselineSpend",
    title: "Baseline Spend",
    type: "currency",
    currencySetting: {
      maximumFractionDigits: 0,
      minimumFractionDigits: 0
    }
  }
];

export const TableProjectProfile: React.FC<{
  profile: ReadProject_project_projectProfiles;
}> = ({ profile }) => {
  const { businessUnit, spend } = profile;

  return (
    <MaterialTable<ReadProject_project_projectProfiles_spend>
      title={businessUnit.name}
      columns={columns}
      data={spend}
      options={{ paging: false }}
    />
  );
};
