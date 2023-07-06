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
    completed: Boolean!
    title: String!
    descrption: String!
    active: Boolean!
    tasks: [Task]
    userID: User
  }

  type Task {
    _id: ID
    name: String!
    completed: Boolean!
  }

  type Auth {
    token: ID
    user: User

  }

  type Query {
    me: User
  }

  input TaskInput{
    description: String
    type: String
    frequency: Int
  }




  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addChallenge(title:String!, completed:Boolean!,  descrption: String!,   active: Boolean!, input: TaskInput userID: ID ): Challenge
  }

 `;

module.exports = typeDefs;