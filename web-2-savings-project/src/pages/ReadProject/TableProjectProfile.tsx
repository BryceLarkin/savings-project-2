import React from "react";
import {
  ReadProject_project_projectProfiles,
  ReadProject_project_projectProfiles_spend
} from "../../gql/__generated__/ReadProject";
import { TitleTableProjectProfile } from "./TitleTableProjectProfile";
import MaterialTable, { Column } from "material-table";
import dayjs from "dayjs";

const columns: Column<ReadProject_project_projectProfiles_spend>[] = [
  {
    field: "month",
    title: "Date",
    render: row => dayjs(row.month).format("MMM YYYY"),
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
  },
  {
    field: "actualSavings",
    title: "Actual Savings",
    type: "currency",
    currencySetting: {
      maximumFractionDigits: 0,
      minimumFractionDigits: 0
    },
    emptyValue: ""
  }
];

export const TableProjectProfile: React.FC<{
  profile: ReadProject_project_projectProfiles;
}> = ({ profile }) => {
  const { businessUnit, spend, id, project } = profile;

  return (
    <MaterialTable<ReadProject_project_projectProfiles_spend>
      title={
        <TitleTableProjectProfile
          title={businessUnit.name}
          projectProfileId={id}
          projectUrl={project.url}
        />
      }
      columns={columns}
      data={spend}
      options={{ paging: false }}
    />
  );
};
