import gql from "graphql-tag";

export const READ_TABLE_PROJECTS = gql`
  query ReadTableProjects(
    $skip: Int
    $after: ID
    $before: ID
    $first: Int
    $last: Int
  ) {
    projects(
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      id
      name
      url
      totalForecastedSavingAmount
      totalForecastedSavingPercentage
      totalBaselineSpend
      owner {
        id
        fullName
      }
    }
  }
`;
