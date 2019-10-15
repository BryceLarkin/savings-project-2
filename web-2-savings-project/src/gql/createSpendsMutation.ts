import gql from "graphql-tag";

export const CREATE_SPENDS = gql`
  mutation CreateSpends($input: [CreateSpendsInput!]!) {
    createSpends(input: $input) {
      id
    }
  }
`;
