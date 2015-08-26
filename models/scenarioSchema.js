var mongoose = require('mongoose');

var scenarioSchema = new mongoose.Schema({
	title: {type: String, required: true},
	scenario: {type: String, required: true},
	imageId: {type: String}
});

module.exports = mongoose.model('Scenario', scenarioSchema);