/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { FilteredSpendInput } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: ReadFilteredSpend
// ====================================================

export interface ReadFilteredSpend_filteredSpend {
  __typename: "Spend";
  id: string;
  month: any;
  baselineSpend: number;
  actualSavings: number | null;
  forecastedSavingsPercentage: number;
  forecastedSavingsAmount: number;
}

export interface ReadFilteredSpend {
  filteredSpend: ReadFilteredSpend_filteredSpend;
}

export interface ReadFilteredSpendVariables {
  input: FilteredSpendInput;
}
