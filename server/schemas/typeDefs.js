const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    journals: [JournalEntry]
  }

  type Challenge {
    _id: ID
    completed: Boolean!
    title: String!
    startDate: String!
    description: String!
    active: Boolean!
    tasks: [Task]
    userID: User
  }

  type Task {
    _id: ID
    taskTitle: String!
    description: String
    frequency: Int!
  }

  type Auth {
    token: ID
    user: User

  }

  type JournalEntry {
    _id: ID
    title: String
    body: String
    dateCreated: String
  }

  type Query {
    me: User
    challenge(userId: ID, active: Boolean) : [ Challenge ]
   tasks: [Task]
  }

  input TaskInput{
    description: String
    type: String
    frequency: Int

  }

  input JournalEntryInput{
    description: String!
    type: String!

  }

  
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addChallenge(title:String!,  description: String!,startDate: String! input: TaskInput, userID: ID ): Challenge
    addTask(description: String, taskTitle: String!, frequency: Int!): Challenge
    addJournal(title:String, body: String, dateCreated: String): User
  }

 `;

module.exports = typeDefs;