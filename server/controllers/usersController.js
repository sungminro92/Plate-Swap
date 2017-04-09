const express = require('express');
const router = express.Router();
const User = require('../models/User');


// [POST] Create new user
router.post('/', function createNewUser(req, res){
  console.log('body:', req.body);
  var user = new User(req.body);
  user.save(function(error){
    if(error) {
      response.json({message: 'Could not add new user'});
    }
    res.json({
      user: user
    });
  });
});



module.exports = router;
