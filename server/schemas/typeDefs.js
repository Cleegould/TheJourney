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
    startDate: String!
    description: String!
    active: Boolean!
    tasks: [Task]
    userID: User
  }

  type Task {
    _id: ID
    type: String
    description: String
    frequency: Int
  }

  type Auth {
    token: ID
    user: User

  }

  type JournalEntry {
    _id: ID
    title: String!
    body: String!
    dateCreated: String!
  }
  type Journal {
    userId: ID
    journal: [JournalEntry]

  }

  type Query {
    me: User
    usersJournal: Journal
    challenge(userId: ID, active: Boolean) : Challenge
  }

  input TaskInput{
    description: String
    type: String
    frequency: Int
  }

  input JournalEntryInput{
    title: String!
    body: String!
  }

  
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addChallenge(title:String!,  description: String!,startDate: String! input: TaskInput, userID: ID ): Challenge
    addTask(description: String, Type: String, frequency: Int): Challenge
    addJournal(input: JournalEntryInput): JournalEntry
  }

 `;

module.exports = typeDefs;