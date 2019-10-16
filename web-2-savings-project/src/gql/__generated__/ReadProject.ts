/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ProjectWhereUniqueInput } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: ReadProject
// ====================================================

export interface ReadProject_project_projectProfiles_businessUnit {
  __typename: "BusinessUnit";
  id: string;
  name: string;
}

export interface ReadProject_project_projectProfiles_spend {
  __typename: "Spend";
  id: string;
  month: any;
  baselineSpend: number;
  forecastedSavings: number;
  actualSavings: number | null;
}

export interface ReadProject_project_projectProfiles {
  __typename: "ProjectProfile";
  id: string;
  businessUnit: ReadProject_project_projectProfiles_businessUnit;
  spend: ReadProject_project_projectProfiles_spend[];
}

export interface ReadProject_project_owner {
  __typename: "User";
  id: string;
  fullName: string;
}

export interface ReadProject_project {
  __typename: "Project";
  id: string;
  name: string;
  url: string;
  projectProfiles: ReadProject_project_projectProfiles[];
  owner: ReadProject_project_owner;
  totalForecastedSavingAmount: number;
  totalForecastedSavingPercentage: number;
  totalBaselineSpend: number;
}

export interface ReadProject {
  project: ReadProject_project | null;
}

export interface ReadProjectVariables {
  where: ProjectWhereUniqueInput;
}
