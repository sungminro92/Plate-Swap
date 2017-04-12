const express = require('express');
const router = express.Router();
const User = require('../models/User');
var authHelpers = require('../helpers/auth.js');
const cookieParser = require('cookie-parser');

router.use(cookieParser());


// Retrieve cookie value
router.get('/cookie', function(req,res){
  res.json({cookie: req.cookies.cookieName});
});



// [POST] Create new user
router.post('/', authHelpers.createSecure, function(req, res){
  console.log('body:', req.body);
  var user = new User(req.body);
  user.password = res.hashedPassword;
  user.save(function(error){
    if(error) {
      res.json({message: 'Could not add new user'});
    }
     res.cookie('cookieName', user._id);
     res.json({
       user: user
     });
  });
});


// Retrieve current user
router.get('/:id', function showUser(req, res){
  var id = req.params.id;
  User
  .findById({_id: id})
  .exec(function(err, user) {
    if(err) {console.log(err)}
      res.json({
        user: user
      });
  });
});



// Retrieve name of current user
router.get('/name/:id', function showIndivItem(req, res){
  var id = req.params.id;
  User
  .findById({_id: id})
  .exec(function(err, user) {
    if(err) {console.log(err)}
      res.json({
        user: user
      });
  });
});


router.post("/login", authHelpers.loginUser, function(req, res) {
  console.log("logged in");
});


router.patch('/tokens/dec/:id', function getUser(req, res){
  var id = req.params.id;
  User
  .findByIdAndUpdate({_id: id}, { '$inc': {'tokens': -1}})
  .exec(function(err, user) {
    user.save();
    res.json({
        user: user
      });
  });
});

router.patch('/tokens/inc/:id', function getUser(req, res){
  var id = req.params.id;
  User
  .findByIdAndUpdate({_id: id}, { '$inc': {'tokens': 10}})
  .exec(function(err, user) {
    user.save();
    res.json({
        user: user
      });
  });
});


module.exports = router;
