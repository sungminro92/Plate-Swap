// Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var session = require('express-session');
const cookieParser = require('cookie-parser');
var dotenv = require('dotenv');
var babelLoader = require('babel-loader');

// Static assets and middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// Connect to port running the app
app.listen(process.env.PORT || 3000, function() {
  console.log('App listening successfully on port');
});

// Connect to database via dotenv
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/barrels'
mongoose.connect(mongoURI);

// Routes
const itemsController = require('./server/controllers/itemsController');
const usersController = require('./server/controllers/usersController');
const sessionController = require('./server/controllers/sessionController');

app.use('/api/items', itemsController);
app.use('/api/users', usersController);
app.use('/api/session', sessionController);
