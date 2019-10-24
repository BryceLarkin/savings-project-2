import gql from "graphql-tag";

export const READ_USER_PROJECTS = gql`
  query ReadUserProjects($where: UserWhereUniqueInput!) {
    user(where: $where) {
      id
      fullName
      projects(orderBy: { createdAt: desc }) {
        id
        name
        url
        totalBaselineSpend
        totalForecastedSavingAmount
        createdAt
      }
    }
  }
`;
