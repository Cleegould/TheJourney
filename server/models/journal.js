const mongoose = require('mongoose');
const { Schema } = mongoose;

const journalSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String
    }
});

const Journal = mongoose.model('Journal', journalSchema);
module.exports = Journal;

