/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ProjectProfileWhereUniqueInput } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: ReadProjectProfileName
// ====================================================

export interface ReadProjectProfileName_projectProfile_businessUnit {
  __typename: "BusinessUnit";
  id: string;
  name: string;
}

export interface ReadProjectProfileName_projectProfile_project {
  __typename: "Project";
  id: string;
  url: string;
  name: string;
}

export interface ReadProjectProfileName_projectProfile {
  __typename: "ProjectProfile";
  id: string;
  businessUnit: ReadProjectProfileName_projectProfile_businessUnit;
  project: ReadProjectProfileName_projectProfile_project;
}

export interface ReadProjectProfileName {
  projectProfile: ReadProjectProfileName_projectProfile | null;
}

export interface ReadProjectProfileNameVariables {
  where: ProjectProfileWhereUniqueInput;
}
