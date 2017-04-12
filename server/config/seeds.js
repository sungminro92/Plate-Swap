// // we need to require mongoose to seed the database
// var mongoose = require('mongoose');
// var Item = require('../models/Item.js');
// var User = require('../models/User.js');
// var Comment = require('../models/Comment.js');

// mongoose.Promise = global.Promise;

// var db = mongoose.connect('mongodb://localhost:27017/barrels');

// // reset db
// User.remove({}, function(err){
//   console.log(err);
// });
// Item.remove({}, function(err){
//   console.log(err);
// });
// Comment.remove({}, function(err){
//   console.log(err);
// });

// var user1 = new User({
// 	firstName: 'Alpha',
//   lastName: 'Lastname',
// 	email: 'alpha@gmail.com'
// });
// var user2 = new User({
// 	firstName: 'Beta',
//   lastName: 'Lastname',
// 	email: 'beta@gmail.com',
//   items: {
//     title: 'Another item',
//     description: 'Just another item',
//     image: 'http://i.imgur.com/614QqTm.jpg',
//     created_at: Date(),
//     updated_at: Date()
//   }
// });
// var user3 = new User({
// 	firstName: 'Gamma',
//   lastName: 'Lastname',
// 	email: 'gamma@gmail.com',
//   items: {
//     title: 'Awesome item',
//     description: 'This is such an awesome item',
//     image: 'http://i.imgur.com/614QqTm.jpg',
//     created_at: Date(),
//     updated_at: Date()
//   }
// });

// var item1 = new Item({
// 	title: 'This is the first item',
// 	description: 'Description of first item',
// 	image: 'http://i.imgur.com/614QqTm.jpg',
// 	created_at: Date(),
// 	updated_at: Date(),
// 	used: false
// });
// var item2 = new Item({
// 	title: 'This is the second item',
// 	description: 'Description of second item',
// 	image: 'http://i.imgur.com/614QqTm.jpg',
// 	created_at: Date(),
// 	updated_at: Date(),
// 	used: false
// });
// var item3 = new Item({
// 	title: 'This is the third item',
// 	description: 'Description of third item',
// 	image: 'http://i.imgur.com/614QqTm.jpg',
// 	created_at: Date(),
// 	updated_at: Date(),
// 	used: false
// });

// var comment1 = new Comment({
// 	text: 'This is the first comment',
// 	created_at: Date()
// });
// var comment2 = new Comment({
// 	text: 'This is the second comment',
// 	created_at: Date()
// });
// var comment3 = new Comment({
// 	text: 'This is the third comment',
// 	created_at: Date()
// });
// var comment4 = new Comment({
// 	text: 'This is the fourth comment',
// 	created_at: Date()
// });
// var comment5 = new Comment({
// 	text: 'This is the fifth comment',
// 	created_at: Date()
// });
// var comment6 = new Comment({
// 	text: 'This is the sixth comment',
// 	created_at: Date()
// });

// var users = [user1, user2, user3];
// var items = [item1, item2, item3];
// var comments = [comment1, comment2, comment3, comment4, comment5, comment6];

// comments.forEach(function(comment, i){
// 	comment.user = users[i%users.length];
// 	comment.item = items[i%items.length];
// 	comment.save(function(err) {
//     if(err) { console.log(err); }
//     console.log("comment"+i);
//   });
// });

// items.forEach(function(item, i){
// 	item.user = users[i];
// 	item.save(function(err) {
//     if(err) { console.log(err); }
//     console.log("item"+i);
//   });
// });

// users.forEach(function(user, i){
//   user.save(function(err) {
//     if(err) { console.log(err); }
//     console.log("user"+i);
//   });
// });

// mongoose.connection.close(function () {
// 	console.log('Mongoose connection disconnected');
// });








// we need to require mongoose to seed the database
var mongoose = require('mongoose');
var Item = require('../models/Item.js');
var User = require('../models/User.js');
var Comment = require('../models/Comment.js');
mongoose.Promise = global.Promise;
var db = mongoose.connect('mongodb://localhost:27017/barrels');
// reset db
User.remove({}, function(err){
  console.log(err);
});
Item.remove({}, function(err){
  console.log(err);
});
Comment.remove({}, function(err){
  console.log(err);
});
var item1 = new Item({
    title: 'Korean Bibim-bop',
    description: 'Korean assorted vegetable rice!',
    city: 'Atlanta',
    state: 'GA',
    image: 'http://i.imgur.com/oBw39hK.png',
    created_at: Date(),
    updated_at: Date(),
    used: false,
    comments: [],
    userId: ''
});
var item2 = new Item({
    title: 'Margherita',
    description: 'Neapolitan pizza, made with San Marzano tomatoes, mozzarella',
    city: 'Downtown Atlanta',
    state: 'GA',
    image: 'http://i.imgur.com/BisqUOC.png',
    created_at: Date(),
    updated_at: Date(),
    used: false,
    comments: [],
    userId: ''
});
var item3 = new Item({
    title: 'Pesto Pasta',
    description: 'Freshly made with basil, pine nuts, olive oil, and grated Parmesan blended together',
    city: 'Duluth',
    state: 'GA',
    image: 'http://i.imgur.com/OA1aDyo.png',
    created_at: Date(),
    updated_at: Date(),
    used: false,
    comments: [],
    userId: ''
});
var user1 = new User({
    name: 'sungmin',
    email: 'sungmin@gmail.com',
    token: 10
});
var user2 = new User({
    name: 'Erin',
    email: 'erin@gmail.com',
    token: 10
});
var user3 = new User({
    name: 'Harry',
    email: 'harry@gmail.com',
    token: 10
});
var comment1 = new Comment({
    text: 'This is Awesome Food!',
    created_at: Date()
});
var comment2 = new Comment({
    text: 'Looks very tasty and fresh',
    created_at: Date()
});
var comment3 = new Comment({
    text: 'I want to know the recipe of this food!',
    created_at: Date()
});
var comment4 = new Comment({
    text: 'Very interesting Look!',
    created_at: Date()
});
var comment5 = new Comment({
    text: "Looks like it's going to melt in my mouth",
    created_at: Date()
});
var comment6 = new Comment({
    text: 'I will have to ask you teach me how to cook this',
    created_at: Date()
});
var comment7 = new Comment({
    text: 'I want this',
    created_at: Date()
});
var comment8 = new Comment({
    text: 'Teach me how cook this please!',
    created_at: Date()
});
var users = [user1, user2, user3];
var items = [item1, item2, item3];
var comments = [comment1, comment2, comment3, comment4, comment5, comment6, comment7, comment8];

comments.forEach(function(comment, i){
    comment.userName = users[i%users.length].name;
    comment.save(function(err) {
    if(err) { console.log(err); }
    console.log("comment"+i);
  });
});
items.forEach(function(item, i){
    item.userName = users[i].name;
    item.save(function(err) {
    if(err) { console.log(err); }
    console.log("item"+i);
  });
});
users.forEach(function(user, i){
  user.save(function(err) {
    if(err) { console.log(err); }
    console.log("user"+i);
  });
});
mongoose.connection.close(function () {
    console.log('Mongoose connection disconnected');
});
