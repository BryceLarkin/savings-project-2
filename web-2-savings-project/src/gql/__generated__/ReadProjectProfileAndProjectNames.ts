/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { QueryProjectProfilesWhereInput } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: ReadProjectProfileAndProjectNames
// ====================================================

export interface ReadProjectProfileAndProjectNames_projectProfiles_businessUnit {
  __typename: "BusinessUnit";
  id: string;
  name: string;
}

export interface ReadProjectProfileAndProjectNames_projectProfiles_project {
  __typename: "Project";
  id: string;
  url: string;
  name: string;
}

export interface ReadProjectProfileAndProjectNames_projectProfiles {
  __typename: "ProjectProfile";
  id: string;
  businessUnit: ReadProjectProfileAndProjectNames_projectProfiles_businessUnit;
  project: ReadProjectProfileAndProjectNames_projectProfiles_project;
}

export interface ReadProjectProfileAndProjectNames {
  projectProfiles: ReadProjectProfileAndProjectNames_projectProfiles[];
}

export interface ReadProjectProfileAndProjectNamesVariables {
  where?: QueryProjectProfilesWhereInput | null;
}
