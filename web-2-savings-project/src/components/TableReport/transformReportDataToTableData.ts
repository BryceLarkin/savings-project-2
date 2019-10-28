import { ReadReportTableData_reportTableData } from "../../gql/__generated__/ReadReportTableData";
import { RowData } from "./TableReport";

export const transformReportDataToTableData = (
  reportData: ReadReportTableData_reportTableData[]
): RowData[] =>
  reportData.length === 0
    ? []
    : reportData.map(
        (project): RowData =>
          project.data.reduce(
            (acc, { columnName, amount }) => ({ ...acc, [columnName]: amount }),
            { project: project.projectName, projectUrl: project.projectUrl }
          )
      );
