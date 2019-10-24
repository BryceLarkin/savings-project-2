import { enumType } from "nexus";

export const ReportDataType = enumType({
  name: "ReportDataType",
  members: [
    "BaselineSpend",
    "ActualSavings",
    "ForecastedSavingsPercentage",
    "ForecastedSavingsAmount"
  ]
});
