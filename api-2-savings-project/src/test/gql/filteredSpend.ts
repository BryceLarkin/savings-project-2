import gql from "graphql-tag";

export const FILTERED_SPEND = gql`
  query FilteredSpend($input: FilteredSpendInput!) {
    filteredSpend(input: $input) {
      id
      month
      baselineSpend
      actualSavings
      forecastedSavingsPercentage
      forecastedSavingsAmount
    }
  }
`;
