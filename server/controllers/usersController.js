const express = require('express');
const router = express.Router();
const User = require('../models/User');
var authHelpers = require('../helpers/auth.js');
const cookieParser = require('cookie-parser');

router.use(cookieParser());


// Retrieve cookie value
router.get('/cookie', function(req,res){
  res.json({cookie: req.cookies.cookieName});
  console.log(req.cookies.cookieName);
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


router.post("/login", authHelpers.loginUser, function(req, res) {
  console.log("logged in");
});

module.exports = router;
