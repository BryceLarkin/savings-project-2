import { getTotalBaselineSpend } from "./totalBaselineSpend";
import { getTotalForcastedSavings } from "./totalForecastedSavingAmount";
import { extendType } from "nexus";

export const totalForecastedSavingPercentage = extendType({
  type: "Project",
  definition(t) {
    t.int("totalForecastedSavingPercentage", {
      resolve: async (parent, args, { photon }) => {
        const projectId = parent.id;

        const baselineSpendPromise = getTotalBaselineSpend(photon, projectId);
        const forecastedSavingsPromise = getTotalForcastedSavings(
          photon,
          projectId
        );

        const [baselineSpend, forecastedSavings] = await Promise.all([
          baselineSpendPromise,
          forecastedSavingsPromise
        ]);

        const percentage = Math.round(
          (forecastedSavings / baselineSpend) * 100
        );

        if (Number.isInteger(percentage)) {
          return percentage;
        } else {
          return 0;
        }
      }
    });
  }
});
