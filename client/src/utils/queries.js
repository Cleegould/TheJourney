import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      journal {
        _id
        title
        body
        dateCreated
      }
    }
  }
`;

export const QUERY_CHALLENGE = gql`
  query challenge {
    challenge {
      title
      startDate
      description
      tasks {
        taskTitle
        _id
        description
        frequency
      }
    }
  }
`;

export const QUERY_JOURNALS = gql`
  query journals {
    me {
      _id
      journal {
        _id
        title
        body
        dateCreated
      }
    }
  }
`;
