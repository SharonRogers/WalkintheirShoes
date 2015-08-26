// *****************CONTROLLER IS FOR EMPATHY TEST***********

var Test = require('../models/testSchema');

module.exports = {

	create: function(req, res) {
		var newTest = new Test(req.body);

		newTest.save(function(err, newTest) {
			if (err) {
				return res.status(500).send(err);
			} else {
			res.send ({message: "New Test Added", data: newTest})
			}
		});

	// 	console.log(req.body)

	// 	newTest.question = req.body.question;
	// 	newTest.answerA = req.body.answerA;
	// 	newTest.answerB = req.body.answerB;
	// 	newTest.answerC = req.body.answerC;
	// 	newTest.answerD = req.body.answerD;

	// newTest.save(function(err, res) {
	// 	if (err) return res.status(500).send(err);
	// 	else res.send(newTest);
	// 	});
	

	},

	// *********METHOD IS CLOSED***************

// **********THIS METHOD IS TO FIND ALL OF THE DOCUMENTS OR QUERY USING ? IN THE URL OR FOR A SPECIFIC DOCUMENT****************

	read: function(req, res) {
		Test.find(req.query).exec(function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	}

	// ***********METHOD IS CLOSED****************
};


