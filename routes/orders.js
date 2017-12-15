const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Orders = require('../models/orders');
var odId;

router.put('/', (req, res, next) => {
    let mobile = req.body.mobile;
    let data = req.body;
    Orders.findOrders(mobile, (err, order) => {
        if (err) {
            return res.send(err);
        } else if (order) {
            return res.send(order._id);
        } else if (!order) {
            Orders.createOrders(req.body, (err, order) => {
                if (err) {
                    return res.send(err);

                } else {
                    return res.send(order._id);

                }
            })
        }
    })
});

router.put('/shipping', (req, res, next) => {
    let mobile = req.body.mobile;
    let data = req.body;
    Orders.findOrders(mobile, (err, order) => {
        if (err) {
            return res.send(err);
        } else if (order) {
            this.odId = order._id;
            console.log(this.odId);
            //return res.send(order._id);
            
            Orders.addToAddress(req.body.order, this.odId, (err, address) => {
                if (err) {
                    return res.send(err);

                } else {
                    return res.send(address);
                }
            });
        }
    })
});

module.exports = router;