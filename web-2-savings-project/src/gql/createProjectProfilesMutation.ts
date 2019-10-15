import gql from "graphql-tag";

export const CREATE_PROJECT_PROFILES = gql`
  mutation CreateProjectProfiles($input: CreateProjectProfilesInput!) {
    createProjectProfiles(input: $input) {
      id
      businessUnit {
        id
      }
    }
  }
`;
