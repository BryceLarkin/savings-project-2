import gql from "graphql-tag";

export const READ_FILTERED_SPEND = gql`
  query ReadFilteredSpend($input: FilteredSpendInput!) {
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
