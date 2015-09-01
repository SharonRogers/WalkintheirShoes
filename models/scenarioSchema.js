// ****SCHEMA FOR FULL SAMPLE STORIES AND EYE IMAGES********

var mongoose = require('mongoose');

// var User = mongoose.model('User', userSchema);

// ***********SCHEMA IDENTIFIES FIELDS FOR COLLECTION***********

var scenarioSchema = new mongoose.Schema({
	title: {type: String, required: true},
	scenario: {type: String, required: true},
	resolution: {type: String},
	imageId: {type: String},
	eyeId: {type: String},
	followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}]

});

// *******CLOSES SCHEMA*********

module.exports = mongoose.model('Scenario', scenarioSchema);