const express = require('express');
const router = express.Router();
const Item = require('../models/Item');
const User = require('../models/User');

// NEED TO CHECK AND MAKE SURE THIS IS PROPERLY GRABBING INFO
// [GET] Index all items by all users (gallery)
router.get('/', function showIndivItem(req, res){
  User
  .distinct('items')
  .exec(function(err, items) {
    if(err) {console.log(err)}
    res.json({
      items: items
    });
  });
});


module.exports = router;
