import React from "react";
import { ReadReportTableData_reportTableData } from "../../gql/__generated__/ReadReportTableData";
import { Column } from "material-table";
import { Link } from "@material-ui/core";
import { LinkProject } from "../Links";
// interface Column {
//   title: string;
//   field: string;
//   type?: string;
// }

export const transformReportDataToTableColumns = (
  reportData: ReadReportTableData_reportTableData[]
): Column<any>[] => {
  if (reportData.length === 0) {
    throw new Error("No data");
  }
  const initColumns: Column<any>[] = [
    {
      title: "Project",
      field: "project",
      render: (rowData: any) => (
        <Link component={LinkProject(rowData.projectUrl)}>
          {rowData.project}
        </Link>
      )
    }
  ];

  // reportData[0].data.map(({ columnName }) => {
  //   columns.push({ title: columnName, field: columnName });
  // });

  const columns: Column<any>[] = reportData[0].data.reduce(
    (acc, { columnName }) => [
      ...acc,
      { title: columnName, field: columnName, type: "currency" }
    ],
    initColumns
  );

  return columns;
};
