var UserStory = require('../models/userStoriesSchema');

module.exports = {

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

	read: function(req, res) {
		UserStory.find(req.query).exec(function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},

	update: function(req, res) {
		UserStory.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},

	remove: function(req, res) {
		UserStory.findByIdAndRemove(req.params.id, req.body, function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	}
};

