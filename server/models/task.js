const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    taskType: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String
    }
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;

