import gql from "graphql-tag";

export const CREATE_PROJECT = gql`
  mutation CreateProject($input: CreateProjectInput!) {
    createProject(input: $input) {
      id
      name
      owner {
        id
      }
    }
  }
`;
