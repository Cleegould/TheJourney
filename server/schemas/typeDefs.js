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
    completed: Boolean!
    dateCreated: Date!
  }


  type Auth {
    token: ID!
    user: User

  }

  type Query {
    me: User
    
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addChallenge(name:String!, completed:Boolean!, dateCreated: Date!)
  }

 `;

module.exports = typeDefs;