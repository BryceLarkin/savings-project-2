import * as moment from "moment";
import { Spend } from "@generated/photon";

export const filterSpendByDate = (
  spend: Spend[],
  startPeriod: number,
  endPeriod: number
): Spend[] =>
  spend.filter(s =>
    moment(s.month).isBetween(startPeriod, endPeriod, null, "[]")
  );
