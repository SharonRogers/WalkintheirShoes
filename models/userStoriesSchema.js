var mongoose = require('mongoose');

var userStoriesSchema = new mongoose.Schema({
	partOne: {type: String},
	partTwo: {type: String},
	partThree: {type: String},
	partFour: {type: String},
	partFive: {type: String},
});

module.exports = mongoose.model('userStory', userStoriesSchema);