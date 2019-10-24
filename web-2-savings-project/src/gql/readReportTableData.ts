import gql from "graphql-tag";

export const READ_REPORT_TABLE_DATA = gql`
  query ReadReportTableData($input: ReportDataTableInput!) {
    reportTableData(input: $input) {
      id
      projectName
      projectUrl
      data {
        id
        columnName
        amount
      }
    }
  }
`;
