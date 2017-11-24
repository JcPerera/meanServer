const mongoose = require('mongoose');
const config = require('../config/database');

//product schema
const ProductSchema = mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true
    }
});

const Product = module.exports = mongoose.model('Product', ProductSchema);

