import { ReadReportTableData_reportTableData } from "../../gql/__generated__/ReadReportTableData";

interface RowData {
  [key: string]: string | number;
}

export const transformReportDataToTableData = (
  reportData: ReadReportTableData_reportTableData[]
): RowData[] =>
  reportData.map(
    (project): RowData =>
      project.data.reduce(
        (acc, { columnName, amount }) => ({ ...acc, [columnName]: amount }),
        { project: project.projectName, projectUrl: project.projectUrl }
      )
  );
