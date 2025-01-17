const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        default: 'Default Text' 
    }
});

module.exports = mongoose.model('ToDo', todoSchema);
