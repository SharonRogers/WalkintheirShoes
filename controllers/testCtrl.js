// *****************CONTROLLER IS FOR EMPATHY TEST***********

var Test = require('../models/testSchema');

module.exports = {

	create: function(req, res) {
		var newTest = new Test(req.body);

		newTest.save(function(err, newTest) {
			if (err) {
				return res.status(500).send(err);
			} else {
			res.send (newTest)
			}
		});
	},

	// *********METHOD IS CLOSED***************

// **********THIS METHOD IS TO FIND ALL OF THE DOCUMENTS OR QUERY USING ? IN THE URL OR FOR A SPECIFIC DOCUMENT****************

	read: function(req, res) {
		Test.find(req.query).exec(function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},

	// ***********METHOD IS CLOSED****************

// **********THIS METHOD IS TO PULL OUT AN INDIVIDUAL DOCUMENT AND UPDATE A PROPERTY OF IT***********

	update: function(req, res) {
		Test.findByIdAndUpdate(req.params.id, req.body, function(err,result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},

	// **********METHOD IS CLOSED***************

// ********THIS METHOD IS TO PULL OUT AN INDIVIDUAL DOCUMENT AND DELETE IT*****

	remove: function(req, res) {
		Test.findByIdAndRemove(req.params.id, req.body, function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	}

	// ***********METHOD IS CLOSED***********
};

// ************MODULE EXPORT IS CLOSED***************




