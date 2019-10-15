import { ProjectProfileCreateInput } from "@generated/photon";

export const mockProjectProfile = (
  projectId: string,
  businessUnitId: string
): ProjectProfileCreateInput => ({
  businessUnit: { connect: { id: businessUnitId } },
  project: { connect: { id: projectId } }
});
