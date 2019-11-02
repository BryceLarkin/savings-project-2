import React, { useState } from "react";
import MaterialTable from "material-table";
import { useQuery } from "@apollo/react-hooks";
import { READ_REPORT_TABLE_DATA } from "../../gql";
import {
  ReadReportTableData,
  ReadReportTableDataVariables
} from "../../gql/__generated__/ReadReportTableData";
import { ReportDataTableInput } from "../../gql/__generated__/graphql-global-types";
import { Loading } from "../Loading";
import { transformReportDataToTableColumns } from "./transformReportDataToTableColumns";
import { transformReportDataToTableData } from "./transformReportDataToTableData";
import { reportDataTypeMap } from "../../constants";
import { formatDate } from "../../helpers";

export interface RowData {
  [key: string]: string | number;
}

export const TableReport: React.FC<{ input: ReportDataTableInput }> = ({
  input
}) => {
  // const { dataType, businessUnitIds, projectIds } = input;
  const [tableData, setTableData] = useState<RowData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { data, loading, error } = useQuery<
    ReadReportTableData,
    ReadReportTableDataVariables
  >(READ_REPORT_TABLE_DATA, {
    variables: {
      input
    },
    onCompleted: data => {
      const transformedData = transformReportDataToTableData(
        data.reportTableData
      );
      setTableData(transformedData);
      setIsLoading(false);
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
      isLoading={isLoading}
      columns={transformReportDataToTableColumns(data.reportTableData)}
      data={tableData}
      title={`${dataType} ${start} - ${end}`}
      options={{
        exportButton: true
      }}
    />
  );
};
