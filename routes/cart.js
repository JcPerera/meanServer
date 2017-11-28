const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Cart = require('../models/cart');


//update a cart
router.put('/', (req, res, next) => {
    let mobile = req.body.mobile;
    let data = req.body;
    Cart.findCart(mobile, (err, cart) => {
        if (err) {
            return res.send(err);
        } else if (cart) {
            Cart.updateCart(mobile, data, (err, newCart) => {
                if (err) {
                    return res.send(err);

                } else {
                    return res.send(newCart);
                }
            })
        } else if (!cart) {
            Cart.createCart(req.body, (err, cart) => {
                if (err) {
                    return res.send(err);

                } else {
                    return res.send(cart);

                }
            })
        }
    })
});

module.exports = router;