// *************CONTROLLER IS FOR USER FRAMEWORK STORIES TO BE INTEGRATED WITH ITEMS IN THE USERSCHEMA**************


var UserStory = require('../models/userStoriesSchema');
var Subject = require('../models/subjectsSchema');

module.exports = {


// ******THIS METHOD IS TO CREATE AND POST THE USER FRAMEWORK STORIES*********

	create: function(req, res) {
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

	read: function(req, res) {
		UserStory.find(req.query).exec(function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},

	// *********METHOD IS CLOSED***************

// **********THIS METHOD IS TO PULL OUT AN INDIVIDUAL DOCUMENT AND UPDATE A PROPERTY OF IT***********

	update: function(req, res) {
		UserStory.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},

	// *********METHOD IS CLOSED***************

// ********THIS METHOD IS TO PULL OUT AN INDIVIDUAL DOCUMENT AND DELETE IT*****

	remove: function(req, res) {
		UserStory.findByIdAndRemove(req.params.id, req.body, function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},

	create: function(req, res) {
		var newSubject = new Subject();

			newSubject.subject = req.body.subject;
			newSubject.comment = req.body.comment;
			newSubject.response = req.body.response;

		newSubject.save(function(err, result) {
			if (err) return res.staus(500).send(err);
			else res.send(result);
		});
	},

	// *********METHOD IS CLOSED***************

	// **********THIS METHOD IS TO FIND ALL OF THE DOCUMENTS OR QUERY USING ? IN THE URL OR FOR A SPECIFIC DOCUMENT****************

	read: function(req, res) {
		Subject.find(req.query).exec(function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},

	// *********METHOD IS CLOSED***************

};

// ************MODULE EXPORT IS CLOSED***************

