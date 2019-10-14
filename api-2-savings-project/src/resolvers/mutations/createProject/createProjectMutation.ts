import { mutationField, arg } from "nexus";
import { isUserPartOfCompany } from "../../permissions";
import { slug } from "../../helpers";

export const INVALID_OWNER_MSG = "Invalid project owner selected";

export const createProjectMutation = mutationField("createProject", {
  type: "Project",
  args: {
    input: arg({
      type: "CreateProjectInput",
      required: true
    })
  },
  resolve: async (parent, { input }, { photon, user }) => {
    const { companyId } = user;

    const isUserValid = await isUserPartOfCompany(
      photon,
      input.ownerId,
      companyId
    );

    if (!isUserValid) {
      throw new Error(INVALID_OWNER_MSG);
    }

    const url = slug(input.name);

    const project = await photon.projects.create({
      data: {
        name: input.name,
        url,
        owner: { connect: { id: input.ownerId } },
        company: { connect: { id: companyId } }
      }
    });

    return project;
  }
});
