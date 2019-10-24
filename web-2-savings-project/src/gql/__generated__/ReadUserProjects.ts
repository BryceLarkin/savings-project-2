/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { UserWhereUniqueInput } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: ReadUserProjects
// ====================================================

export interface ReadUserProjects_user_projects {
  __typename: "Project";
  id: string;
  name: string;
  url: string;
  totalBaselineSpend: number;
  totalForecastedSavingAmount: number;
  createdAt: any;
}

export interface ReadUserProjects_user {
  __typename: "User";
  id: string;
  fullName: string;
  projects: ReadUserProjects_user_projects[];
}

export interface ReadUserProjects {
  user: ReadUserProjects_user | null;
}

export interface ReadUserProjectsVariables {
  where: UserWhereUniqueInput;
}
