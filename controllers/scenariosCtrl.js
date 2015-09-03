// *****************CONTROLLER IS FOR FULL SAMPLE STORIES AND EYE IMAGES******

var Scenario = require('../models/scenarioSchema');
var User = require('../models/userSchema');




module.exports = {


// **********THIS METHOD IS TO FIND ALL OF THE DOCUMENTS OR QUERY USING ? IN THE URL OR FOR A SPECIFIC DOCUMENT****************

	read: function(req, res) {
		Scenario.find(req.query).exec(function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},

	// ***********METHOD IS CLOSED****************

// **********THIS METHOD ADDS A FOLLOWER / USER ID TO THE SCENARIO AND SAVES THE SCENARIO TO THE USER*******************
	
	addFollower: function(req, res) {
		console.log(req.user);
		console.log(req.params.scenarioId);
		var userId = req.user._id;
		var scenarioId = req.params.scenarioId;
		Scenario.findById(scenarioId).exec(function(err, result) {
			if (err) return res.status(500).send(err);
			else {
				result.followers.push(userId);
				result.save(function(err, savedScenario) {
					if (err) return res.status(500).send(err);
					else {
						User.findById(userId).exec(function(err, user) {
						if (err) return res.status(500).send(err);
						else {
							user.stories.push(scenarioId);
							user.save(function(err, savedUser) {
								if (err) return res.status(500).send(err);
								else res.status(200).send("success");
							})
						}
					})
					}
				})
			};
		});
	}



};

// ************MODULE EXPORT IS CLOSED***************

