import { Photon, SpendClient, Spend } from "@generated/photon";

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
  spendAmountsAndDates.map(s =>
    photon.spends.create({
      data: {
        month: new Date(s.month),
        baselineSpend: s.baselineSpend,
        forecastedSavingsAmount: s.forecastedSavings,
        actualSavings: s.actualSavings,
        projectProfile: { connect: { id: projectProfileId } }
      }
    })
  );
