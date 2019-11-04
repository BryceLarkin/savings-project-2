import gql from "graphql-tag";

export const PROJECT_PROFILE_NAMES = gql`
  fragment ProjectProfileNames on ProjectProfile {
    id
    businessUnit {
      id
      name
    }
    project {
      id
      url
      name
    }
  }
`;
