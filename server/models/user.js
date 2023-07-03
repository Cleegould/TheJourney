const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  challenges: [
    {
     type: Schema.Types.ObjectId,
      ref: 'Challenge',
    }
  ]
  
});

const User = model("User", userSchema);

module.exports = User;
