import gql from "graphql-tag";

export const READ_PICKER_PROJECTS = gql`
  query ReadPickerProjects {
    projects(orderBy: { name: asc }) {
      id
      name
    }
  }
`;
