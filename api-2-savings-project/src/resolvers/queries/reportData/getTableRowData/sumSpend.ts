import { Spend } from "@generated/photon";
import { ReportDataType } from "../../../../graphql-types";
import { UnreachableCaseError } from "../../../helpers";
import { NexusGenEnums } from "../../../../generated/nexus-typegen";

const getSpendType = (
  dataType: NexusGenEnums["ReportDataType"]
): keyof Pick<
  Spend,
  | "actualSavings"
  | "baselineSpend"
  | "forecastedSavingsAmount"
  | "forecastedSavingsPercentage"
> => {
  switch (dataType) {
    case "ActualSavings":
      return "actualSavings";
    case "BaselineSpend":
      return "baselineSpend";
    case "ForecastedSavingsAmount":
      return "forecastedSavingsAmount";
    case "ForecastedSavingsPercentage":
      return "forecastedSavingsPercentage";
    default:
      throw new UnreachableCaseError(dataType);
  }
};

export const sumSpend = (
  spend: Spend[],
  dataType: NexusGenEnums["ReportDataType"],
  initAmount = 0
): number => {
  const spendType = getSpendType(dataType);

  return spend.reduce((acc, curSpend) => {
    const curAmount = curSpend[spendType];

    if (typeof curAmount !== "number") {
      return acc;
    } else {
      return curAmount + acc;
    }
  }, initAmount);
};

// spend.reduce((acc, cur) => {
//   let newAcc = acc;

//   if (cur.actualSavings !== null) {
//     newAcc.actualSavings = cur.actualSavings + newAcc.actualSavings;
//   }

//   newAcc.baselineSpend = cur.baselineSpend + newAcc.baselineSpend;
//   newAcc.forecastedSavings = cur.forecastedSavings + newAcc.forecastedSavings;

//   return newAcc;
// }, initData);
