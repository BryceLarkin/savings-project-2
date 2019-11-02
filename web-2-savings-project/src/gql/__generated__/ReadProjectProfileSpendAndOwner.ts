/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ProjectProfileWhereUniqueInput } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: ReadProjectProfileSpendAndOwner
// ====================================================

export interface ReadProjectProfileSpendAndOwner_projectProfile_spend {
  __typename: "Spend";
  id: string;
  month: any;
  baselineSpend: number;
  forecastedSavingsAmount: number;
  actualSavings: number | null;
}

export interface ReadProjectProfileSpendAndOwner_projectProfile_project_owner {
  __typename: "User";
  id: string;
}

export interface ReadProjectProfileSpendAndOwner_projectProfile_project {
  __typename: "Project";
  id: string;
  owner: ReadProjectProfileSpendAndOwner_projectProfile_project_owner;
}

export interface ReadProjectProfileSpendAndOwner_projectProfile {
  __typename: "ProjectProfile";
  id: string;
  spend: ReadProjectProfileSpendAndOwner_projectProfile_spend[];
  project: ReadProjectProfileSpendAndOwner_projectProfile_project;
}

export interface ReadProjectProfileSpendAndOwner {
  projectProfile: ReadProjectProfileSpendAndOwner_projectProfile | null;
}

export interface ReadProjectProfileSpendAndOwnerVariables {
  where: ProjectProfileWhereUniqueInput;
}
