// Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var session = require('express-session');
const cookieParser = require('cookie-parser');

//require('dotenv').config();
app.use(session({
  secret: "derpderpderpcats",
  resave: false,
  saveUninitialized: false
}));

app.use(cookieParser());

// set a cookie
app.use(function (req, res, next) {
  // check if client sent cookie
  var cookie = req.cookies.cookieName;
  if (cookie === undefined)
  {
    res.cookie('cookieName','1234');
    console.log('cookie created successfully');
  }
  else
  {
    // yes, cookie was already present
    console.log('cookie exists', cookie);
  }
  next(); // <-- important!
});


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
