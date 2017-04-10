// THIS IS WHERE SEEDED DATA LIVES

var mongoose = require('mongoose'); //requiring mongoose.

var Schema = mongoose.Schema;

var CommentSchema = new Schema({ // comment Schema
	text: String,
	created_at: Date
});

CommentSchema.pre('save', function(next) {
	now = new Date();
	if (!this.created_at) {this.created_at = now}
	next();
});

var ItemSchema = new Schema({ // item Schema
	title: String,
	description: String,
	image: String,
	created_at: Date,
	updated_at: Date,
	used: Boolean,
	comments: [CommentSchema]
});

ItemSchema.pre('save', function(next) {
	used = false;
	now = new Date();
	this.updated_at = now;

	if (!this.created_at) {this.created_at = now}
	next();
});

var UserSchema = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	password: String,
	token: Number,
	items: [ItemSchema]
});


var UserModel = mongoose.model('User', UserSchema);
var ItemModel = mongoose.model('Item', ItemSchema);
var CommentModel = mongoose.model('Comment', CommentSchema);

module.exports = {
	User: UserModel,
	Item: ItemModel,
	Comment: CommentModel
}
