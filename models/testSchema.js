// **SCHEMA IS FOR STATIC LIST OF TEST QUESTIONS AND MULTIPLE CHOICE ANSWERS***

var mongoose = require('mongoose');

// ***********SCHEMA IDENTIFIES FIELDS FOR COLLECTION***********

var testSchema = new mongoose.Schema({
	question: {type: String, required: true},

// *****ONE TO MANY OPTIONS FOR MULTIPLE COMMENTS FOR ONE SUBJECT********
	
	answers: [
		{
			answerA: {type: Boolean},
			answerB: {type: Boolean},
			answerC: {type: Boolean},
			answerD: {type: Boolean}
		}
	]
	// ******CLOSE ONE TO MANY ARRAY*********
});

// *******CLOSES SCHEMA*********

module.exports = mongoose.model('Test', testSchema);

