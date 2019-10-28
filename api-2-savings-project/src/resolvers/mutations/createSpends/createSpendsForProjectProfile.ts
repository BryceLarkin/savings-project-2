import { Photon, SpendClient, Spend } from "@generated/photon";
import * as _ from "lodash";

interface SpendAmountsAndDates {
  actualSavings?: number | null;
  baselineSpend: number;
  forecastedSavings: number;
  month: string;
}

interface CreateSpendData {
  projectProfileId: string;
  spendAmountsAndDates: SpendAmountsAndDates[];
}

export const createSpendsForProjectProfile = (
  photon: Photon,
  { projectProfileId, spendAmountsAndDates }: CreateSpendData
): SpendClient<Spend>[] =>
  spendAmountsAndDates.map(s => {
    const forecastedSavingsPercentage = Math.round(
      s.forecastedSavings / s.baselineSpend
    );
    return photon.spends.create({
      data: {
        month: new Date(s.month),
        baselineSpend: s.baselineSpend,
        forecastedSavingsAmount: s.forecastedSavings,
        forecastedSavingsPercentage,
        actualSavings: s.actualSavings,
        projectProfile: { connect: { id: projectProfileId } }
      }
    });
  });
