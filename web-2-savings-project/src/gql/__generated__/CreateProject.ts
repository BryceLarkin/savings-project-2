/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CreateProjectInput } from "./graphql-global-types";

// ====================================================
// GraphQL mutation operation: CreateProject
// ====================================================

export interface CreateProject_createProject_owner {
  __typename: "User";
  id: string;
}

export interface CreateProject_createProject {
  __typename: "Project";
  id: string;
  name: string;
  owner: CreateProject_createProject_owner;
}

export interface CreateProject {
  createProject: CreateProject_createProject;
}

export interface CreateProjectVariables {
  input: CreateProjectInput;
}
