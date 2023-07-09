const { AuthenticationError } = require("apollo-server-express");
const { User, Challenge, Task } = require("../models");
const { signToken } = require("../utils/auth");
const { findOne } = require("../models/challenge");

const resolvers = {
  Query: {
    challenge: async (parent, args, context) =>{
        if (context.user){
            return Challenge.findOne({userId: context.user._id,active:true}).populate("tasks")
        }
        throw new AuthenticationError("You need to be logged in!");
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("challenge");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      console.log("signup");
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      console.log(user);
      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    addChallenge: async (
      parent,
      { title, startDate, description },
      context
    ) => {
      if (context.user) {
        const challenge = await Challenge.create({
          title,
          completed: false,
          startDate,
          description,
          userId: context.user._id,
          active: true,
        });
        return challenge;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addTask: async (parent, { taskTitle, description, frequency }, context) => {
      if (context.user) {
        const task = await Task.create({
          taskTitle,
          description,
          frequency,
        });
        const updatedChallenge = await Challenge.findOneAndUpdate(
          { userId: context.user._id, active:true },
          { $addToSet: { tasks: [task._id] } },
          { new: true }
        );
        return updatedChallenge;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addJournal: async(parent, { title, description }, context) => {
      if (context.user) {
        const journal = await JournalEntry.create({
          title,
          description,
          dateCreated: new Date()
        });
        const updateUser = await User.findOneAndUpdate(
          {_id: context.user._id},
          {$addToSet: { journal: [journal._id]}},
          {new: true}
        );
        return journal
      }
      throw new AuthenticationError("You need to be logged in!");
    }
  },
};

module.exports = resolvers;
