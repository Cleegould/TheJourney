// Creates and exports the Mongoose model for the "Challenge" collection.

const { Schema, model } = require("mongoose");

const challengeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now  
  },
  
});

const Challenge = model("Challenge", challengeSchema);

module.exports = Challenge;
