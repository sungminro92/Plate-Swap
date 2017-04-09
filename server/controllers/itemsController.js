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
  })
});


// [POST] Create new item
router.post('/', function createNewItem(req, res){
  console.log('body:', req.body);
  var item = new Item({
    user: req.session.currentUser,
    //userId: req.session.currentUser.id
    title: req.body.title,
    description: req.body.description,
    image: req.body.image
  });
  item.save(function(error){
    if(error) {
      response.json({message: 'Could not add new item'});
    }
    res.json({
      item: item
    });
  });
});


module.exports = router;
