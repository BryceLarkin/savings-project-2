import * as moment from "moment";
import { Spend } from "@generated/photon";

export const filterSpendByDate = (
  spend: Spend[],
  startPeriod: string,
  endPeriod: string
): Spend[] =>
  spend.filter(s =>
    moment(s.month).isBetween(
      new Date(startPeriod),
      new Date(endPeriod),
      "day",
      "[]"
    )
  );
