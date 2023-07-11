const mongoose = require('mongoose');
const { Schema } = mongoose;

const journalEntrySchema = new Schema([{
    title: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,
        required: false
    },
    dateCreated: {
        type: Date,
        required: true,
        default: Date.now
    },
}]);

const JournalEntry = mongoose.model('JournalEntry', journalEntrySchema);

module.exports = JournalEntry;

