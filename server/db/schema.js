// THIS IS WHERE SEEDED DATA LIVES

var mongoose = require('mongoose'); //requiring mongoose.

var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: String,
	email: String,
	passwordDigest: String,
	token: Number
});

var ItemSchema = new Schema({ // item Schema
	user: UserSchema,
	title: String,
	description: String,
	image: String,
	created_at: Date,
	updated_at: Date,
	used: Boolean,
});

ItemSchema.pre('save', function(next) { 
	used = false;
	now = new Date();
	this.updated_at = now;

	if (!this.created_at) {this.created_at = now}
	next();
});

var CommentSchema = new Schema({ // comment Schema
	user: UserSchema,
	item: ItemSchema,
	text: String,
	created_at: Date
});

CommentSchema.pre('save', function(next) { 
	now = new Date();
	if (!this.created_at) {this.created_at = now}
	next();
});

var UserModel = mongoose.model('User', UserSchema);
var ItemModel = mongoose.model('Item', ItemSchema);
var CommentModel = mongoose.model('Comment', CommentSchema);

module.exports = {
	User: UserModel,
	Item: ItemModel,
	Comment: CommentModel
}