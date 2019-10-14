import {
  CreateProjectProfileInput,
  CreateProjectProfilesInput
} from "./createProjectProfilesInput";

import { createProjectProfilesMutation } from "./createProjectProfilesMutation";

export const createProjectProfiles = [
  CreateProjectProfileInput,
  CreateProjectProfilesInput,
  createProjectProfilesMutation
];
