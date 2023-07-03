const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    challenges: [Challenge]
  }

  type Challenge {
    _id: ID
    name: String!
    completed: Boolean
    dateCreated: Date!
    medalEarned: String
  }


  type Auth {
    token: ID!
    user: User

  }
  input ChallengeInput {
    _id: ID!
    completed: Boolean
    medalEarned: String
  }

  type Query {
    me: User
    
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addChallenge(name:String!, dateCreated: Date!): Challenge 
    updateChallenge(input: ChallengeInput): Challenge 
  }

 `;

module.exports = typeDefs;