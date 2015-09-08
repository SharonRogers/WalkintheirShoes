var User = require('../models/userSchema');
var Scenario = require('../models/scenarioSchema');


module.exports = {

		userScenarios: function(req, res) {
		
			User.findOne({ 'email' : req.body.email })
			.populate('stories')
			.exec(function(err, user) {
				if (err) return res.status(500).send(err);
				else res.send(user);
				console.log("The user info is:", user)
		});
	},


		updateUser: function(req, res) {
		User.findOne({ 'email' : req.body.email })
		.exec(function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(user);
		});
	},


}