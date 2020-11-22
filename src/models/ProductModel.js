const mongoose = require('mongoose');

const ProductModel = new mongoose.Schema({
    sku: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: false
    }
}, { timestamps: true });


module.exports = mongoose.model('product', ProductModel);
