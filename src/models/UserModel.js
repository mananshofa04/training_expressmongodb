const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: false
    },
    hoby: {
        type: String,
        required: false
    },
    
}, {timestamps: true});

module.exports = mongoose.model('users', UserModel);