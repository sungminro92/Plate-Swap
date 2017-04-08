const express = require('express');
const router = express.Router();
const Item = require('../models/Item');
const User = require('../models/User');

// Index all items in gallery
router.get('/', function indexItems(req,res) {
  res.json( { message: 'This is the items index'});
});

// Show individual item
router.get('/:itemId', function showIndivItem(req, res){
  res.json( {message: 'This is a single item'});
});


module.exports = router;
