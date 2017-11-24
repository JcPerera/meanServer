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
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true,
    },
    guests: {
        type: Number,
        required: true,
    }

});

const User = module.exports = mongoose.model('User', UserSchema);