const express = require('express');
const router = express.Router({mergeParams: true});
const bodyParser = require('body-parser');
const Item = require('../models/Item');
const User = require('../models/User');
const Comment = require('../models/Comment');


// Route to create new comment for a specific item
router.post('/', function createNewComment(req, res){
    Item.findById(req.params.id)
    .exec(function(err,item){
        if(err) {console.log(err)}
        var newComment = new Comment({
            text: req.body.text,
            userId: req.body.userId,
            userName: req.body.userName
        });
        item.comments.push(newComment);
        item.save();
        res.json({
            newComment: newComment
        });
    });
});

module.exports = router;
