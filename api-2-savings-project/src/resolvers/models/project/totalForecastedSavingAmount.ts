import { extendType } from "nexus";
import { Photon } from "@generated/photon";

export const getTotalForcastedSavings = async (
  photon: Photon,
  projectId: string
) => {
  const projectProfiles = await photon.projectProfiles.findMany({
    where: { project: { id: projectId } },
    select: { spend: { select: { forecastedSavings: true } } }
  });

  const spend = projectProfiles.reduce((acc, projectProfile) => {
    const spendForProjectProfile = projectProfile.spend.reduce(
      (projectProfileSpend, spend) =>
        projectProfileSpend + spend.forecastedSavings,
      0
    );

    return acc + spendForProjectProfile;
  }, 0);

  return spend;
};

export const totalForecastedSavingAmount = extendType({
  type: "Project",
  definition(t) {
    t.int("totalForecastedSavingAmount", {
      resolve: async (parent, args, { photon }) => {
        const projectId = parent.id;

        const spend = await getTotalForcastedSavings(photon, projectId);

        return spend;
      }
    });
  }
});
