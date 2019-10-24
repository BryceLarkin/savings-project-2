import React from "react";
import { ReadTableProjects_projects } from "../../gql/__generated__/ReadTableProjects";
import { Link } from "@material-ui/core";
import { LinkProject } from "../../components/Links";
import MaterialTable, { Column } from "material-table";

const columns: Column<ReadTableProjects_projects>[] = [
  {
    field: "name",
    title: "Project",
    render: row => <Link component={LinkProject(row.url)}>{row.name}</Link>
  },
  // @ts-ignore
  { field: "owner.fullName", title: "Owner" },
  {
    field: "totalForecastedSavingAmount",
    title: "Forecasted Savings",
    type: "currency"
  },
  {
    field: "totalForecastedSavingPercentage",
    title: "Forecasted Savings %",
    type: "numeric",
    render: data => `${data.totalForecastedSavingPercentage}%`
  },
  { field: "totalBaselineSpend", title: "Baseline Spend", type: "currency" }
];
export const TableProjects: React.SFC<{
  projects: ReadTableProjects_projects[];
}> = ({ projects }) => {
  return <MaterialTable columns={columns} data={projects} title="Projects" />;
};
