// THIS IS WHERE SEEDED DATA LIVES

var mongoose = require('mongoose'); //requiring mongoose.

var Schema = mongoose.Schema;

var CommentSchema = new Schema({ // comment Schema
	text: String,
	created_at: Date,
	userId: String,
	userName: String
});

CommentSchema.pre('save', function(next) {
	now = new Date();
	if (!this.created_at) {this.created_at = now}
	next();
});

var ItemSchema = new Schema({ // item Schema
	title: String,
	description: String,
	city: String,
	state: String,
	image: String,
	created_at: Date,
	updated_at: Date,
	used: Boolean,
	comments: [CommentSchema],
	userId: String,
	userName: String,
	numAvailable: Number
});

ItemSchema.pre('save', function(next) {
	used = false;
	now = new Date();
	this.updated_at = now;

	if (!this.created_at) {this.created_at = now}
	next();
});

var UserSchema = new Schema({
	name: String,
	email: String,
	password: String,
	token: Number,
	itemsClaimed: [ItemSchema],
	tokens: Number
});


var UserModel = mongoose.model('User', UserSchema);
var ItemModel = mongoose.model('Item', ItemSchema);
var CommentModel = mongoose.model('Comment', CommentSchema);

module.exports = {
	User: UserModel,
	Item: ItemModel,
	Comment: CommentModel
}
