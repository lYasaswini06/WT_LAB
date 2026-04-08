const mongoose = require('./db');

const userSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('User', userSchema);