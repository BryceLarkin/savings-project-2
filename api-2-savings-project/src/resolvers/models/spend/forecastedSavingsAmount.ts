import { extendType } from "nexus";

export const forecastedSavingsAmount = extendType({
  type: "Spend",
  definition(t) {
    t.int("forecastedSavingsAmount", {
      resolve: async ({ forecastedSavingsAmount }) => forecastedSavingsAmount
    });
  }
});
