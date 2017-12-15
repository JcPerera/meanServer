const mongoose = require('mongoose');
const config = require('../config/database');

//product schema
const OrdersSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    orders: [{
        cart: {},
        address: {},
        payment: {}
    }]
});

const Orders = module.exports = mongoose.model('orders', OrdersSchema);

module.exports.createOrders = function (data, callback) {
    Orders.create(data, callback);
}

module.exports.findOrders = function (mobile, callback) {
    let query = { mobile: mobile };
    Orders.findOne(query, callback);
}
module.exports.addToAddress = function (data, id, callback) {
    let query = { _id: id };
    Orders.update(query, { $push: { "orders": data } }, callback);
}