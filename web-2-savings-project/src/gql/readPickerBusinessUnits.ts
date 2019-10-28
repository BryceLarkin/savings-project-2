import gql from "graphql-tag";

export const READ_PICKER_BUSINESS_UNITS = gql`
  query ReadPickerBusinessUnits {
    businessUnits(orderBy: { name: asc }) {
      id
      name
    }
  }
`;
