import { Spend } from "@generated/photon";
import * as _ from "lodash";

export const sumSpend = (spend: Spend[], initSpend: Spend) =>
  spend.reduce((acc, cur) => {
    let newAcc = acc;

    if (cur.actualSavings !== null) {
      newAcc.actualSavings = cur.actualSavings + newAcc.actualSavings;
    }

    newAcc.baselineSpend = cur.baselineSpend + newAcc.baselineSpend;
    newAcc.forecastedSavings = cur.forecastedSavings + newAcc.forecastedSavings;

    return newAcc;
  }, initSpend);
