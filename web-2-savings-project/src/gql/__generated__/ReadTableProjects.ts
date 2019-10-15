/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ReadTableProjects
// ====================================================

export interface ReadTableProjects_projects_projectProfiles {
  __typename: "ProjectProfile";
  id: string;
}

export interface ReadTableProjects_projects_owner {
  __typename: "User";
  id: string;
  fullName: string;
}

export interface ReadTableProjects_projects {
  __typename: "Project";
  id: string;
  name: string;
  url: string;
  projectProfiles: ReadTableProjects_projects_projectProfiles[];
  owner: ReadTableProjects_projects_owner;
}

export interface ReadTableProjects {
  projects: ReadTableProjects_projects[];
}

export interface ReadTableProjectsVariables {
  skip?: number | null;
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
}
