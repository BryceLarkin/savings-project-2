/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { QueryProjectProfilesWhereInput } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: ReadProjectProfileNames
// ====================================================

export interface ReadProjectProfileNames_projectProfiles_businessUnit {
  __typename: "BusinessUnit";
  id: string;
  name: string;
}

export interface ReadProjectProfileNames_projectProfiles_spend {
  __typename: "Spend";
  id: string;
}

export interface ReadProjectProfileNames_projectProfiles {
  __typename: "ProjectProfile";
  id: string;
  businessUnit: ReadProjectProfileNames_projectProfiles_businessUnit;
  spend: ReadProjectProfileNames_projectProfiles_spend[];
}

export interface ReadProjectProfileNames {
  projectProfiles: ReadProjectProfileNames_projectProfiles[];
}

export interface ReadProjectProfileNamesVariables {
  where?: QueryProjectProfilesWhereInput | null;
}
