const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Product = require('../models/products');


router.get('/', (req, res, next) => {
    Product.find({}).then((products => {
        res.send(products);
    }))
})


module.exports = router;