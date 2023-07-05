const { AuthenticationError } = require('apollo-server-express');
const { User, Challenge, Task } = require('../models');
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
        return User.findOne({ _id: context.user._id }).populate('challenge');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      console.log('signup');
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
 
      const user = await User.findOne({ email });
      console.log(user);
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

    addChallenge: async (parent, {name, completed, dateCreated}, context) => {
        if (context.user) {
            const challenge = await Challenge.create({
                name, 
                completed:false,
                dateCreated: new Date()
            })
            await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { challenges: [challenge._id ]} }
              );  
              return challenge;
        } 
        throw new AuthenticationError('You need to be logged in!')

    }

  },


}

module.exports = resolvers;