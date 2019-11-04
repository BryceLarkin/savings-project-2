import gql from "graphql-tag";
import { PROJECT_PROFILE_NAMES } from "./fragmentProjectProfileNames";

export const READ_PROJECT_PROFILE_NAME = gql`
  query ReadProjectProfileName($where: ProjectProfileWhereUniqueInput!) {
    projectProfile(where: $where) {
      ...ProjectProfileNames
    }
  }
  ${PROJECT_PROFILE_NAMES}
`;
