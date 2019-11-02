import { createProject } from "./createProject";
import { createProjectProfiles } from "./createProjectProfiles";
import { createSpends } from "./createSpends";
import { updateOneProjectProfile } from "./updateOneProjectProfile";

export const mutations = [
  createProject,
  createProjectProfiles,
  createSpends,
  updateOneProjectProfile
];
