var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username: {type: String, required: true, unique: true},
	password: {type: String, required: true}
	// email: {type: String, required: true, unique: true}
	// facebookId: {type: String},
	// facebookName: {type: String},
	// twitterId: {type: String},
	// twitterName: {type: String},
	// googleId: {type: String},
	// googleName: {type: String},
	// favFamily: {type: String},
	// favFood: {type: String},
	// favFear: {type: String},
	// favPlace: {type: String}
});

module.exports = mongoose.model('User', userSchema);