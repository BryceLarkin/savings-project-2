import { mutationField, arg } from "nexus";

export const createProjectProfilesMutation = mutationField(
  "createProjectProfiles",
  {
    type: "ProjectProfile",
    list: true,
    args: {
      input: arg({
        type: "CreateProjectProfilesInput",
        required: true
      })
    },
    resolve: async (parent, { input }, { photon }) => {
      const { projectId, projectProfiles } = input;

      const projectProfilePromises = projectProfiles.map(profile =>
        photon.projectProfiles.create({
          data: {
            project: { connect: { id: projectId } },
            businessUnit: { connect: { id: profile.businessUnitId } }
          }
        })
      );

      return Promise.all(projectProfilePromises);
    }
  }
);
