/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProjectProfileNames
// ====================================================

export interface ProjectProfileNames_businessUnit {
  __typename: "BusinessUnit";
  id: string;
  name: string;
}

export interface ProjectProfileNames_project {
  __typename: "Project";
  id: string;
  url: string;
  name: string;
}

export interface ProjectProfileNames {
  __typename: "ProjectProfile";
  id: string;
  businessUnit: ProjectProfileNames_businessUnit;
  project: ProjectProfileNames_project;
}
