import gql from "graphql-tag";

export const UPDATE_ONE_PROJECT_PROFILE_SPEND = gql`
  mutation UpdateOneProjectProfileSpend(
    $data: ProjectProfileUpdateInput!
    $where: ProjectProfileWhereUniqueInput!
  ) {
    updateOneProjectProfile(data: $data, where: $where) {
      id
    }
  }
`;
