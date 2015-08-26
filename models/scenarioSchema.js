// ****SCHEMA FOR FULL SAMPLE STORIES AND EYE IMAGES********

var mongoose = require('mongoose');

// ***********SCHEMA IDENTIFIES FIELDS FOR COLLECTION***********

var scenarioSchema = new mongoose.Schema({
	title: {type: String, required: true},
	scenario: {type: String, required: true},
	imageId: {type: String}
});

// *******CLOSES SCHEMA*********

module.exports = mongoose.model('Scenario', scenarioSchema);