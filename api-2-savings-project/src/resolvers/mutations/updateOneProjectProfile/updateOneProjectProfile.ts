import { mutationField, arg } from "nexus";
import { checkUserPermissions } from "./checkUserPermissions";

export const updateOneProjectProfile = mutationField(
  "updateOneProjectProfile",
  {
    type: "ProjectProfile",
    args: {
      data: arg({
        type: "ProjectProfileUpdateInput",
        required: true
      }),
      where: arg({
        type: "ProjectProfileWhereUniqueInput",
        required: true
      })
    },
    resolve: async (parent, { data, where }, { photon, user: { uid } }) => {
      const projectProfileId = where.id;

      const projectProfile = await photon.projectProfiles.findOne({
        where: { id: projectProfileId },
        select: { project: { select: { owner: { select: { id: true } } } } }
      });

      if (projectProfile === null) {
        throw new Error(
          `Project Profile not found for id: ${projectProfileId}`
        );
      }

      const isUserAuthorized = checkUserPermissions({
        data,
        ownerId: projectProfile.project.owner.id,
        userId: uid
      });

      if (!isUserAuthorized) {
        throw new Error(
          "Only the owner of the project can edit these properties"
        );
      }

      return photon.projectProfiles.update({
        where,
        data
      });
    }
  }
);

// interface UpdateOneProjectProfileData {
//   spend?: {
//     update: {
//       data: {
//         actualSavings?: number | null | undefined;
//         baselineSpend?: number | null | undefined;
//         forecastedSavingsAmount?: number | null | undefined;
//       };
//       where: {
//         id: string;
//       };
//     };
//   }[];
// }
