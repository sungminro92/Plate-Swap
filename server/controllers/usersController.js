const express = require('express');
const router = express.Router();
const User = require('../models/User');
var authHelpers = require('../helpers/auth.js');


router.post("/login", authHelpers.loginUser, function(req, res) {
  console.log("logged in");
  //res.redirect('/items');
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
     res.json({
       user: user
     });
    //res.redirect('/items');
  });
});


module.exports = router;