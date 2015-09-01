var mongoose = require('mongoose');

var subjectsSchema = new mongoose.Schema({
	subject: {type: String, required: true},
	comment: {type: String, required: true},
	response: {type: String, required: true}
});

module.exports = mongoose.model('subject', subjectsSchema);