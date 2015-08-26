// *********SCHEMA IS FOR STATIC LIST OF COMMON ISSUES***********

var mongoose = require('mongoose');

// *********SCHEMA IDENTIFIES FIELDS FOR COLLECTION************

var problemSchema = new mongoose.Schema({
	subject: {type: String, required: true},

// *****ONE TO MANY OPTIONS FOR MULTIPLE COMMENTS FOR ONE SUBJECT********
	
	comments: [
		{
			statement: {type: String, required: true},
			reason: {type: String}
		}
	]
	// ******CLOSE ONE TO MANY ARRAY*********
});

// *******CLOSES SCHEMA*********

module.exports = mongoose.model('Problem', problemSchema);