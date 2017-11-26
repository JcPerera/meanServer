const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Cart = require('../models/cart');


// create a cart
router.post('/', (req, res, next) => {
    Cart.createCart(req.body, (err, cart) => {
        return res.send(cart);
    })
})

//update a cart
router.put('/:id', (req, res, next) => {
    let id = req.params.id;
    Cart.updateCart({ _id: id }, req.body, (err, cart) => {
        Cart.findCart({_id:id},(err,ans)=>{
            if(err){
                res.send(err);
            }else{
                res.send(ans);
            }
            
        })
    });
});

module.exports = router;