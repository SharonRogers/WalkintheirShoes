// // **********************CONTROLLER IS FOR ADMIN PAGE*******************

var Scenario = require('../models/scenarioSchema');
var User = require('../models/userSchema');
var Problem = require('../models/problemSchema');
var Test = require('../models/testSchema');
var UserStories = require('../models/userStoriesSchema');

module.exports = {

// **********THIS METHOD IS TO LIST ALL USERS***********************

	getAllUsers: function(req, res) {
		User.find(req.query).exec(function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		})
	},

	removeUser: function(req, res) {
		User.findOne({ 'email' : req.body.email })
		.exec(function(err, result) {
			if (err) return res.status(500).send(err);
			else delete(user);
		});
	},

// *****THESE METHODS ARE TO FIND THEN UPDATE OR REMOVE SCENARIOS FROM THE DATABASE********

	readScenarios: function(req, res) {
		Scenario.find(req.query).exec(function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},

	// ***********METHOD IS CLOSED****************

	updateScenarios: function(req, res) {
		Scenario.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},

	// **********METHOD IS CLOSED***************


	removeScenarios: function(req, res) {
		Scenario.findByIdAndRemove(req.params.id, req.body, function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},

	// ***********METHOD IS CLOSED***********

// *****THESE METHODS ARE TO CREATE NEW USER STORIES OR FIND THEN UPDATE OR REMOVE USER STORIES FROM THE COLLECTION*******


	addUserStory: function(req, res) {
		var newUserStory = new UserStory();

			newUserStory.partOne = req.body.partOne;
			newUserStory.partTwo = req.body.partTwo;
			newUserStory.partThree = req.body.partThree;
			newUserStory.partFour = req.body.partFour;
			newUserStory.partFive = req.body.partFive;

		newUserStory.save(function(err, result) {
			if (err) return res.staus(500).send(err);
			else res.send(result);
		});
	},

	// *********METHOD IS CLOSED***************

// **********THIS METHOD IS TO FIND ALL OF THE DOCUMENTS OR QUERY USING ? IN THE URL OR FOR A SPECIFIC DOCUMENT****************

	readAllUserStories: function(req, res) {
		UserStory.find(req.query).exec(function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},

	// *********METHOD IS CLOSED***************

// **********THIS METHOD IS TO PULL OUT AN INDIVIDUAL DOCUMENT AND UPDATE A PROPERTY OF IT***********

	updateUserStory: function(req, res) {
		UserStory.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},

	// *********METHOD IS CLOSED***************

// ********THIS METHOD IS TO PULL OUT AN INDIVIDUAL DOCUMENT AND DELETE IT*****

	removeUserStory: function(req, res) {
		UserStory.findByIdAndRemove(req.params.id, req.body, function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},

	// *********METHOD IS CLOSED*************

// // *****THESE METHODS ARE TO FIND THEN UPDATE OR REMOVE PROBLEMS FROM THE COLLECTION*******

// 	readAllProblems: function(req, res) {
// 		Problem.find(req.query).exec(function(err, result) {
// 			if (err) return res.status(500).send(err);
// 			else res.send(result);
// 		});
// 	},

// 	// *********METHOD IS CLOSED***************

// // **********THIS METHOD IS TO PULL OUT AN INDIVIDUAL DOCUMENT AND UPDATE A PROPERTY OF IT***********

// 	updateProblem: function(req, res) {
// 		Problem.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
// 			if (err) return res.status(500).send(err);
// 			else res.send(result);
// 		});
// 	},

// 	// *********METHOD IS CLOSED***************

// // ********THIS METHOD IS TO PULL OUT AN INDIVIDUAL DOCUMENT AND DELETE IT*****

// 	removeProblem: function(req, res) {
// 		Problem.findByIdAndRemove(req.params.id, req.body, function(err, result) {
// 			if (err) return res.status(500).send(err);
// 			else res.send(result);
// 		});
// 	},

// 	// *********METHOD IS CLOSED*************


// *****THESE METHODS ARE TO CREATE NEW TEST QUESTIONS OR FIND THEN UPDATE OR REMOVETEST QUESTIONS FROM THE COLLECTION*******

		addTestItem: function(req, res) {
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

	getAllTestItems: function(req, res) {
		Test.find(req.query).exec(function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},

	// ***********METHOD IS CLOSED****************

// **********THIS METHOD IS TO PULL OUT AN INDIVIDUAL DOCUMENT AND UPDATE A PROPERTY OF IT***********

	updateTestItem: function(req, res) {
		Test.findByIdAndUpdate(req.params.id, req.body, function(err,result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},

	// **********METHOD IS CLOSED***************

// ********THIS METHOD IS TO PULL OUT AN INDIVIDUAL DOCUMENT AND DELETE IT*****

	removeTestItem: function(req, res) {
		Test.findByIdAndRemove(req.params.id, req.body, function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	}

	// ***********METHOD IS CLOSED***********


}