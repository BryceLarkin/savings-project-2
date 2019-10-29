import { Spend } from "@generated/photon";
import { UnreachableCaseError, calculatePercentage } from "../../../helpers";
import { NexusGenEnums } from "../../../../generated/nexus-typegen";

const getSpendType = (
  dataType: NexusGenEnums["ReportDataType"]
):
  | keyof Pick<
      Spend,
      "actualSavings" | "baselineSpend" | "forecastedSavingsAmount"
    >
  | "forecastedSavingsPercentage" => {
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
    let curAmount: number;
    if (spendType === "forecastedSavingsPercentage") {
      curAmount = calculatePercentage(
        curSpend.forecastedSavingsAmount,
        curSpend.baselineSpend
      );
    } else if (spendType === "actualSavings") {
      curAmount = curSpend.actualSavings === null ? 0 : curSpend.actualSavings;
    } else {
      curAmount = curSpend[spendType];
    }

    return curAmount + acc;
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
