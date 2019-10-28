/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CreateProjectInput } from "./graphql-global-types";

// ====================================================
// GraphQL mutation operation: CreateProject
// ====================================================

export interface CreateProject_createProject {
  __typename: "Project";
  id: string;
  url: string;
}

export interface CreateProject {
  createProject: CreateProject_createProject;
}

export interface CreateProjectVariables {
  input: CreateProjectInput;
}
