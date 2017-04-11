const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Item = require('../models/Item');
const User = require('../models/User');

// NEED TO CHECK AND MAKE SURE THIS IS PROPERLY GRABBING INFO
// [GET] Index all items by all users (gallery)
router.get('/', function showAllItems(req, res){
  Item
  .find({})
  .exec(function(err, items) {
    if(err) {console.log(err)}
     res.json({
      items: items
    });
  })
});

// USER PROFILE & SHOWING THIS USER'S ITEMS FILTERED by items.userId
router.get('/filter/:userId', function showThisUserItems(req, res) {
  Item
  .find({ userId: req.params.userId})
  .exec(function(err, items) {
    if(err) {console.log(err)}
      res.json({
        items: items
      });
    })
});

router.get('/:id', function showIndivItem(req, res){
  var id = req.params.id;
  Item
  .findById({_id: id})
  .exec(function(err, item) {
    if(err) {console.log(err)}
      res.json({
        item: item
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
    userId: req.body.userId
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



router.patch('/:id', function updateAction(req, res) {
  var id = req.params.id;

  Item
  .findById({_id: id}, function(error, item) {
    if(error) res.json({message: 'Could not find item b/c:' + error});
    if(req.body.title) item.title = req.body.title;
    if(req.body.description) item.description = req.body.description;
    if(req.body.city) item.city = req.body.city;
    if(req.body.state) item.state = req.body.state;

    item.save(function(error) {
      console.log(error)
      if(error) res.json({messsage: 'Could not update item b/c:' + error});
      res.json({message: 'Item successfully updated', item: item});
    });
  });
});

router.delete('/:id', function destroyAction(req, res) {
  var id = req.params.id;

  Item
  .remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete item b/c:' + error});

    res.json({message: 'Item successfully deleted'});
  }).select('-__v');
});


module.exports = router;
