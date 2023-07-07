const mongoose = require('mongoose');
const { Schema } = mongoose;

const journalSchema = new Schema({
    userId:
    {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    journal: [
        {
            type: Schema.Types.ObjectId,
            ref: 'JournalEntry'
        }
    ]
});

const Journal = mongoose.model('Journal', journalSchema);
module.exports = Journal