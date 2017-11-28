const mongoose = require('mongoose');
const config = require('../config/database');

//product schema
const CartSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    cart: {
        products: [
            {
                name: {
                    type: String
                },
                category: {
                    type: String
                },
                price: {
                    type: Number
                },
                quantity: {
                    type: Number
                }
            }
        ]
    }
});

const Cart = module.exports = mongoose.model('Cart', CartSchema);

module.exports.createCart = function (data, callback) {
    Cart.create(data, callback);
}

module.exports.findCart = function (mobile, callback) {
    let query = { mobile: mobile };
    Cart.findOne(query, callback);
}

module.exports.addToCart = function (data, callback) {
    let query = { _id: data.params.id };
    Cart.update(query, { $push: { "cart.products": data.body } }, callback);
}

