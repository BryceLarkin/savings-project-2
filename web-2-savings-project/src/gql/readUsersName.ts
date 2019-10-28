import gql from "graphql-tag";

export const READ_USERS_NAME = gql`
  query ReadUsersName {
    users {
      id
      fullName
    }
  }
`;
