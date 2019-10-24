/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ReportDataTableInput } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: ReadReportTableData
// ====================================================

export interface ReadReportTableData_reportTableData_data {
  __typename: "ReportTableRowData";
  id: string;
  columnName: string;
  amount: number;
}

export interface ReadReportTableData_reportTableData {
  __typename: "ReportTableData";
  id: string;
  projectName: string;
  projectUrl: string;
  data: ReadReportTableData_reportTableData_data[];
}

export interface ReadReportTableData {
  reportTableData: ReadReportTableData_reportTableData[];
}

export interface ReadReportTableDataVariables {
  input: ReportDataTableInput;
}
