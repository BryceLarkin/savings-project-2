import gql from "graphql-tag";

export const READ_PROJECT_PROFILE_SPEND_AND_OWNER = gql`
  query ReadProjectProfileSpendAndOwner(
    $where: ProjectProfileWhereUniqueInput!
  ) {
    projectProfile(where: $where) {
      id
      spend {
        id
        month
        baselineSpend
        forecastedSavingsAmount
        actualSavings
      }
      project {
        id
        owner {
          id
        }
      }
    }
  }
`;
