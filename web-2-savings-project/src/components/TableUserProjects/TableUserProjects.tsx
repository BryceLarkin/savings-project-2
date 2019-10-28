import React from "react";
import { Link } from "@material-ui/core";
import { LinkProject } from "../../components/Links";
import MaterialTable, { Column } from "material-table";
import {
  ReadUserProjects_user_projects,
  ReadUserProjects_user
} from "../../gql/__generated__/ReadUserProjects";
import dayjs from "dayjs";

const columns: Column<ReadUserProjects_user_projects>[] = [
  {
    field: "name",
    title: "Project",
    render: row => <Link component={LinkProject(row.url)}>{row.name}</Link>
  },
  {
    field: "totalBaselineSpend",
    title: "Baseline Spend",
    type: "currency",
    currencySetting: { minimumFractionDigits: 0, maximumFractionDigits: 0 }
  },
  {
    field: "totalForecastedSavingAmount",
    title: "Forecasted Savings",
    type: "currency",
    currencySetting: { minimumFractionDigits: 0, maximumFractionDigits: 0 }
  },
  {
    field: "createdAt",
    title: "Created At",
    render: row => dayjs(row.createdAt).format("MMM YYYY"),
    type: "date"
  }
];

export const TableUserProjects: React.SFC<{ user: ReadUserProjects_user }> = ({
  user
}) => {
  return (
    <MaterialTable<ReadUserProjects_user_projects>
      title={`${user.fullName} Projects`}
      columns={columns}
      data={user.projects}
      options={{
        paging: false
      }}
    />
  );
};
