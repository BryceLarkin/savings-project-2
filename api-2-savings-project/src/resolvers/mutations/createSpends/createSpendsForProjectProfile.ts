import { Photon } from "@generated/photon";
import * as _ from "lodash";

interface SpendAmountsAndDates {
  actualSavings?: number;
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
) =>
  spendAmountsAndDates.map(s =>
    photon.spends.create({
      data: {
        month: new Date(_.parseInt(s.month)),
        baselineSpend: s.baselineSpend,
        forecastedSavings: s.forecastedSavings,
        actualSavings: s.actualSavings,
        projectProfile: { connect: { id: projectProfileId } }
      }
    })
  );
