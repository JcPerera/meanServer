const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Reservations = require('../models/reservations');
const sms = require('twilio')('ACde035de9af829ff6fa5cbf4e78bc6230','4dda6196841291cc8afecb05043379b0')


//PUT REQUEST SO ONLY UPDATE OR CREATE
//check if there are any reservations need mobile no as a parameter
router.put('/', (req, res, next) => {
    let query = { mobile: req.body.mobile }
    Reservations.findUserReservation(query, (err, ans) => {
        if (err) {
            return res.send(err);
        } else if (ans) {
            Reservations.updateReservation({ _id: ans._id }, req.body, (err, cart) => {
                if (err) {
                    return res.send({status:"failed", msg:"failed to Update the Reservation"});

                } else {/*
                    sms.messages.create({
                        to: '+94'+cart.mobile,
                        from: '+14245265973',
                        body: 'You have made a reservation on '+req.body.date+' at '+req.body.time+' for '+req.body.count+' guests'
                    },function (err,data){
                        if(err){
                            console.log(err);
                        }else{
                            console.log(data);
                        }
                    })*/
                    return res.send({status:"success", msg:"Sucessfully Added a Reservation"});
                }
            })
            //add a method to update the reservations

        } else {
            Reservations.createReservation(req.body, (err, newRes) => {
                if (err) {
                    return res.send({status:"failed", msg:"Failed to Add a Reservation"});

                } else {/*
                    sms.messages.create({
                        to: '+94'+newRes.mobile,
                        from: '+14245265973',
                        body: 'You have made a reservation on '+newRes.date+' at '+newRes.time+' for '+newRes.count+' guests'
                    },function (err,data){
                        if(err){
                            console.log(err);
                        }else{
                            console.log(data);
                        }
                    })*/
                    return res.send({status:"success", msg:"Sucessfully Added a Reservation"});
                }
            })
            //add a method to create a reservation
        }
    })
})

// add another method to check reservations using get method ( use id )



module.exports = router;