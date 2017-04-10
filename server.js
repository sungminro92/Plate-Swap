// Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//require('dotenv').config();

// Static assets and middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// Connect to port running the app
app.listen(process.env.PORT || 3000, function() {
  console.log('App listening successfully on port');
});

// Connect to database via dotenv
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/business-trade'
mongoose.connect(mongoURI);

// Routes
const itemsController = require('./server/controllers/itemsController');
const usersController = require('./server/controllers/usersController');
app.use('/api/items', itemsController);
app.use('/api/users', usersController);