import { ReportDataType } from "../gql/__generated__/graphql-global-types";

type ReportDataTypeObject = { [key in keyof typeof ReportDataType]: string };

export const reportDataTypeMap: ReportDataTypeObject = {
  ActualSavings: "Actual Savings",
  BaselineSpend: "Basaeline Spend",
  ForecastedSavingsAmount: "Forecasted Savings ($)",
  ForecastedSavingsPercentage: "Forecasted Savings (%)"
};
