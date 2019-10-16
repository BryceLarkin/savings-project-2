import gql from "graphql-tag";

export const READ_PROJECT = gql`
  query ReadProject($where: ProjectWhereUniqueInput!) {
    project(where: $where) {
      id
      name
      url
      projectProfiles {
        id
        businessUnit {
          id
          name
        }
        spend {
          id
          month
          baselineSpend
          forecastedSavings
          actualSavings
        }
      }
      owner {
        id
        fullName
      }
      totalForecastedSavingAmount
      totalForecastedSavingPercentage
      totalBaselineSpend
    }
  }
`;
