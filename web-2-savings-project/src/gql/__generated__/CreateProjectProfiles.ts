/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CreateProjectProfilesInput } from "./graphql-global-types";

// ====================================================
// GraphQL mutation operation: CreateProjectProfiles
// ====================================================

export interface CreateProjectProfiles_createProjectProfiles_businessUnit {
  __typename: "BusinessUnit";
  id: string;
}

export interface CreateProjectProfiles_createProjectProfiles {
  __typename: "ProjectProfile";
  id: string;
  businessUnit: CreateProjectProfiles_createProjectProfiles_businessUnit;
}

export interface CreateProjectProfiles {
  createProjectProfiles: CreateProjectProfiles_createProjectProfiles[];
}

export interface CreateProjectProfilesVariables {
  input: CreateProjectProfilesInput;
}
