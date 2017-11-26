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

//find product by category <- not used, but can be used to find a food by name
module.exports.getProductrByCategory = function (category, callback) {
    const query = { category: category }
    Product.find(query, callback);
}

//find all products
module.exports.getProducts = function (callback) {
    Product.find({},callback);
}

