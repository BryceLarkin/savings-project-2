import gql from "graphql-tag";

export const READ_PROJECT_PROFILE_NAMES = gql`
  query ReadProjectProfileNames($where: QueryProjectProfilesWhereInput) {
    projectProfiles(where: $where) {
      id
      businessUnit {
        id
        name
      }
      spend {
        id
      }
    }
  }
`;
