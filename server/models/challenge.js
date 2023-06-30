// Creates and exports the Mongoose model for the "Challenge" collection.

const {Schema, model} = require('mongoose')

const challengeSchema = new Schema({
challenge1: {
    type: String,
    required: true,
},
challenge2: {
    type: String,
    required: true,
},
challenge3: {
    type: String,
    required: true,
},
challenge4: {
    type: String,
    required: true,
},
challenge5: {
    type: String,
    required: true,
},
challenge6: {
    type: String,
    required: true,
},


});

const Challenge = model('Challenge', challengeSchema);

module.exports = Challenge;