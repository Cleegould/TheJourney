const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb:', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;