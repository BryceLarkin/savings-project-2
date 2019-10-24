import React from "react";
import MaterialTable from "material-table";
import { useQuery } from "@apollo/react-hooks";
import { format } from "date-fns";
import { READ_REPORT_TABLE_DATA } from "../../gql";
import {
  ReadReportTableData,
  ReadReportTableDataVariables
} from "../../gql/__generated__/ReadReportTableData";
import {
  ReportDataType,
  ReportDataTableInput
} from "../../gql/__generated__/graphql-global-types";
import { Loading } from "../Loading";
import { transformReportDataToTableColumns } from "./transformReportDataToTableColumns";
import { transformReportDataToTableData } from "./transformReportDataToTableData";
import { reportDataTypeMap } from "../../constants";

export interface TableReportInputs {
  dataType: ReportDataType;
  businessUnitIds: string[];
  projectIds: string[];
}

export const TableReport: React.FC<{ input: ReportDataTableInput }> = ({
  input
}) => {
  // const { dataType, businessUnitIds, projectIds } = input;

  const { data, loading, error } = useQuery<
    ReadReportTableData,
    ReadReportTableDataVariables
  >(READ_REPORT_TABLE_DATA, {
    variables: {
      input
    }
  });

  if (loading || !data) return <Loading />;

  if (error)
    return (
      <div>{`There was an error generating your report: ${error.message}`}</div>
    );

  const dataType = reportDataTypeMap[input.dataType];
  const start = formatDate(input.startPeriod);
  const end = formatDate(input.endPeriod);
  // Todo: Format for percentage is incorrect
  return (
    <MaterialTable
      isLoading={loading}
      columns={transformReportDataToTableColumns(data.reportTableData)}
      data={transformReportDataToTableData(data.reportTableData)}
      title={`${dataType}. ${start} - ${end}`}
      options={{
        exportButton: true
      }}
    />
  );
};

const formatDate = (time: string) =>
  format(new Date(parseInt(time, 10)), "MM/yyyy");

// projectIds: string[];
// businessUnitIds: string[];
// dataType: ReportDataType;
// startPeriod: string;
// endPeriod: string;
