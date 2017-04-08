var mongoose = require('mongoose'); //requiring mongoose.

var Schema = mongoose.Schema;

// commentSchema
var CommentSchema = new Schema({
	text: String,
	created_at: Date
});

var ItemSchema = new Schema({
	name: String,
	description: String,
	price: Number,
	image: String,
	city: String,
	comments: [CommentSchema],
	state: String,
	created_at: Date,
	updated_at: Date,
});

ItemSchema.pre('save', function(next) {
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
	items: [ItemSchema],
})

var UserModel = mongoose.model('User', UserSchema);
var ItemModel = mongoose.model('Item', ItemSchema);
var CommentModel = mongoose.model('Comment', CommentSchema);

module.exports = {
	User: UserModel,
	Item: ItemModel,
	Comment: CommentModel
}
