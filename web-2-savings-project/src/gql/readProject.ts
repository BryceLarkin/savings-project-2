import gql from "graphql-tag";

export const READ_PROJECT = gql`
  query ReadProject($where: ProjectWhereUniqueInput!) {
    project(where: $where) {
      id
      name
      url
      owner {
        id
        fullName
      }
      totalForecastedSavingAmount
      totalForecastedSavingPercentage
      totalBaselineSpend
      projectProfiles {
        id
        businessUnit {
          id
          name
        }
        spend(orderBy: { month: asc }) {
          id
          month
          forecastedSavingsAmount
          forecastedSavingsPercentage
          baselineSpend
          actualSavings
        }
      }
    }
  }
`;
