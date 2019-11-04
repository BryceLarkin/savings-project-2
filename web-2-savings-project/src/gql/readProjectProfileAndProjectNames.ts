import gql from "graphql-tag";
import { PROJECT_PROFILE_NAMES } from "./fragmentProjectProfileNames";

export const READ_PROJECT_PROFILE_AND_PROJECT_NAMES = gql`
  query ReadProjectProfileAndProjectNames(
    $where: QueryProjectProfilesWhereInput
  ) {
    projectProfiles(where: $where) {
      ...ProjectProfileNames
    }
  }
  ${PROJECT_PROFILE_NAMES}
`;
