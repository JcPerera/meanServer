const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Cart = require('../models/cart');


//send cart details (create / excisting)
router.put('/', (req, res, next) => {
    let mobile = req.body.mobile;
    let data = req.body;
    Cart.findCart(mobile, (err, cart) => {
        if (err) {
            return res.send(err);
        } else if (cart) {
            return res.send(cart);
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

router.get('/:id', (req, res, next) => {
    Cart.findCartById(req, (err, cart) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(cart);
        }
    });
});


//add products to the cart
router.put('/:id', (req, res, next) => {
    Cart.addToCart(req, (err, upd) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(upd);
        }
    })
})

router.put('/update/:id', (req, res, next) => {
    Cart.updateCartByItemId(req, (err, upd) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(upd);
        }
    })
})

router.put('/remove/:id',(req, res, next) => {
    Cart.removeItemFromCart(req, (err, upd) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(upd);
        }
    })
})

module.exports = router;