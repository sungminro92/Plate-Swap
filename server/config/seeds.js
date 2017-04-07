// we need to require mongoose to seed the database
var mongoose = require('mongoose');
var Item = require('../models/Item.js');
var User = require('../models/User.js');
var Comment = require('../models/Comment.js');

mongoose.Promise = global.Promise;

var db = mongoose.connect('mongodb://localhost:27017/barrels');

// var UserSchema = new Schema({
// 	firstName: String,
// 	lastName: String,
// 	email: String,
// 	password_digest: String,
// 	items: [ItemSchema],
// })

// var ItemSchema = new Schema({
// 	name: String,
// 	description: String,
// 	price: Number,
// 	image: String,
// 	city: String,
// 	comments: [CommentSchema],
// 	state: String,
// 	created_at: Date,
// 	updated_at: Date,
// });

// var CommentSchema = new Schema({
// 	text: String,
// 	created_at: Date
// });

User.remove({});

var user1 = new User({
	firstName: 'Harry',
	lastName: '',
	email: 'randomemail@gmail.com',
	items: {
		name: 'makeup',
		description: 'makeup',
		price: 24,
		image: 'string',
		city: 'string',
		comments: {
			text: 'string',
		},
		state: 'GA'
	}
});

user1.save(function createUser(err){
	if (err) {
		console.log(err);}
		console.log('user created');

});

// db.('open', function() {
// 	console.log('database connected');
// });