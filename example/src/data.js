import ApolloClient, { gql } from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'http://localhost:4001'
});

export const BOOKS = gql`
  {
    books {
      id
      title
    }
  }
`;

export const CHANGE_SUBS = gql`
  subscription ListenChange {
    foo_changed
  }
`;
