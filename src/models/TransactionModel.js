const mongoose = require('mongoose');

const TransactionModel = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    sku: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: false
    }
}, { timestamps: true });

module.exports = mongoose.model('transaction', TransactionModel);
