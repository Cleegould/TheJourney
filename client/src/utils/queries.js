import { gql } from '@apollo/client';



export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    
    }
  }
`;

export const QUERY_CHALLENGE = gql`
query challenge {
  challenge{
    title
    startDate
    description
    tasks {
      type
      description
      frequency
    }
  }
}
`;
