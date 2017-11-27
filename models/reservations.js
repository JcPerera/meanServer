const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//user schema
const ReservationSchema = mongoose.Schema({
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        required: true,
    },
    today: {
        type: String,
        required: true,
    }

});

const Reservations = module.exports = mongoose.model('Reservations', ReservationSchema);

module.exports.createReservation = function (data, callback) {
    Reservations.create(data, callback);
}

module.exports.findUserReservation = function (mobile, callback) {
    Reservations.findOne(mobile, callback);
}

module.exports.updateReservation = function (query, data, callback) {
    Reservations.findByIdAndUpdate(query, data, callback);
}