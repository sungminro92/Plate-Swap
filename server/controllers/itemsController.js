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
router.post('/', function createNewPost(req, res){
  console.log('body:', req.body);
  var item = new Item({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    city: req.body.city,
    state: req.body.state,
    // creator: req.session.currentUser.id
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
