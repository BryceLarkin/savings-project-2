/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CreateSpendsInput } from "./graphql-global-types";

// ====================================================
// GraphQL mutation operation: CreateSpends
// ====================================================

export interface CreateSpends_createSpends {
  __typename: "ProjectProfile";
  id: string;
}

export interface CreateSpends {
  createSpends: CreateSpends_createSpends[];
}

export interface CreateSpendsVariables {
  input: CreateSpendsInput[];
}
