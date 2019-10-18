import { extendType } from "nexus";
import { calculatePercentage } from "../../helpers";

export const forecastedSavingsPercentage = extendType({
  type: "Spend",
  definition(t) {
    t.int("forecastedSavingsPercentage", {
      resolve: async ({ forecastedSavings, baselineSpend }) =>
        calculatePercentage(forecastedSavings, baselineSpend)
    });
  }
});
