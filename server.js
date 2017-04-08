// Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000, function() {
  console.log('App listening successfully bruh');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


// Connect to database via dotenv
mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect('mongodb://localhost:27017/proj3');


// Routes
const itemsController = require('./server/controllers/itemsController');
const usersController = require('./server/controllers/usersController');

app.use('/api/items', itemsController);
app.use('/api/users', usersController);
