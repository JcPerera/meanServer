const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Product = require('../models/products');



router.get('/', (req, res, next) => {
    Product.find({}).then((products => {
        res.send(products);
    }))
});

/*
Product.findOne({ category: req.query.category }).then((products => {
        if (products) {
            res.send(products);
        }else{
            res.send({
                status: req.query.category
            })
        }
    }))


router.get('/', (req, res, next) => {
    let cat = req.query.category;
    if (cat=="all"){
        Product.getProducts((err,product)=>{
            if(err) throw err;
            if(product){
                return res.json(product);
            }else{
                return res.json({sucess : false, msg: "Product not found"});
            }
        })
    }else{
        Product.getProductrByCategory(cat,(err,product)=>{
            if(err) throw err;
            if(product){
                return res.json(product);
            }else{
                return res.json({sucess : false, msg: "Product not found"});
            }
        });
    }
    

    
});*/


module.exports = router;