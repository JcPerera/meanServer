const mongoose = require('mongoose');
const config = require('../config/database');

//product schema
const CartSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    cart: {
        products: [
            {
                name: {
                    type: String,
                    required: true
                },
                category: {
                    type: String,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true
                }
            }
        ]
    },
    date: {
        type: String,
        required: true,
    },
    address: {
        no: {
            type: String,
            required: true
        },
        line1: {
            type: String,
            required: true
        },
        line2: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
    }
});

const Cart = module.exports = mongoose.model('Cart', CartSchema);

module.exports.createCart = function (data, callback) {
    Cart.create(data, callback);
}

module.exports.findCart = function (id, callback) {
    Cart.findOne({ _id: id }, (callback));
}
module.exports.updateCart = function (id, data, callback) {
    Cart.findByIdAndUpdate(id, data, callback);
}


