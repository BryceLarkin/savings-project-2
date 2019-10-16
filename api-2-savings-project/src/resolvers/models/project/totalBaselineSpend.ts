import { extendType } from "nexus";
import { Photon } from "@generated/photon";

export const getTotalBaselineSpend = async (
  photon: Photon,
  projectId: string
) => {
  const projectProfiles = await photon.projectProfiles.findMany({
    where: { project: { id: projectId } },
    select: { spend: { select: { baselineSpend: true } } }
  });

  const spend = projectProfiles.reduce((acc, projectProfile) => {
    const spendForProjectProfile = projectProfile.spend.reduce(
      (projectProfileSpend, spend) => projectProfileSpend + spend.baselineSpend,
      0
    );

    return acc + spendForProjectProfile;
  }, 0);

  return spend;
};

export const totalBaselineSpend = extendType({
  type: "Project",
  definition(t) {
    t.int("totalBaselineSpend", {
      resolve: async (parent, args, { photon }) => {
        const projectId = parent.id;

        const spend = await getTotalBaselineSpend(photon, projectId);

        return spend;
      }
    });
  }
});
