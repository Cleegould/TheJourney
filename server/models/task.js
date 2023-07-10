const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    taskTitle: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    frequency: {
        type: Number,
        required: true,
        
    }

});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
