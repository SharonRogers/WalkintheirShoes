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


	update: function(req, res) {
		UserInfo.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},

	remove: function(req, res) {
		UserInfo.findByIdAndRemove(req.params.id, req.body, function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	}
}