// Creates and exports the Mongoose model for the "Challenge" collection.
// const { Schema, model } = require("mongoose");
const mongoose = require('mongoose');

const { Schema } = mongoose;

const challengeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
    default: Date.now  
  },
  userId: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    }
  ],
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Task'
    }
  ]
});

const Challenge = mongoose.model("Challenge", challengeSchema);

module.exports = Challenge;

