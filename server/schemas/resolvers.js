const { AuthenticationError } = require('apollo-server-express');
const { User, Challenge } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {

    // challenge: async (parent, args, context) =>{
    //     if (context.user){
    //         return Challenge.findOne()
    //     }
    // },
  
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('challenges');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addChallenge: async (parent, {name, dateCreated}, context) => {
        if (context.user) {
            const challenge = await Challenge.create({
                name, 
                dateCreated: new Date()
            })
            await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { challenges: challenge._id } }
              );  
              return challenge;
        } 
        throw new AuthenticationError('You need to be logged in!')

    }

  },

  updateChallenge: async (parent, {input}, context) =>{
    if (context.user) {
      const challenge = await Challenge.findOneAndUpdate({
        _id: input._id
      },
      {
        $set: {completed: input.completed, medalEarned: input.medalEarned}
      },
      {
        new: true
      }

      )
      return challenge
    }
    throw new AuthenticationError('You need to be loggied in!')
  
  }



}

module.exports = resolvers;