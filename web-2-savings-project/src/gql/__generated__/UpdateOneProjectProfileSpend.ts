/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ProjectProfileUpdateInput, ProjectProfileWhereUniqueInput } from "./graphql-global-types";

// ====================================================
// GraphQL mutation operation: UpdateOneProjectProfileSpend
// ====================================================

export interface UpdateOneProjectProfileSpend_updateOneProjectProfile {
  __typename: "ProjectProfile";
  id: string;
}

export interface UpdateOneProjectProfileSpend {
  updateOneProjectProfile: UpdateOneProjectProfileSpend_updateOneProjectProfile;
}

export interface UpdateOneProjectProfileSpendVariables {
  data: ProjectProfileUpdateInput;
  where: ProjectProfileWhereUniqueInput;
}
