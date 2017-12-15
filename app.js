const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');


//connect to database
mongoose.connect(config.database);

//on connection
mongoose.connection.on('connected',()=>{
    console.log('connected to database '+config.database);
})

//on error
mongoose.connection.on('error',(err)=>{
    console.log('database error '+err);
})

const app = express();

//port number
const port = process.env.PORT || 8080;

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//cores middleware
app.use(cors());

//body parser middleware
app.use(bodyParser.json());

//passport middleware
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

//start server
app.listen(port, () => {
    console.log('server started on port ' + port);
});  



//defined paths
const users = require('./routes/users');
app.use('/users', users);

const products = require('./routes/products');
app.use('/online-orders', products);

const cart = require('./routes/cart');
app.use('/cart', cart);

const orders = require('./routes/orders');
app.use('/orders', orders);

const reservations = require('./routes/reservations');
app.use('/reservations', reservations);


//index route
app.get('/', (req, res) => {
    res.send('invalid Endpoint');
}); 

//all paths
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

