var Scenario = require('../models/scenarioSchema');

module.exports = {

	create: function(req, res) {
		var newScenario = new Scenario();

			newScenario.title = req.body.title;
			newScenario.scenario = req.body.scenario;
			newScenario.imageId = req.body.imageId;

		newScenario.save(function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},

/////////////read is listed n the URL to read  finding a specific///////////

	read: function(req, res) {
		Scenario.find(req.query).exec(function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},


/////////////////////these 2 are found with a question mark in the Url////////

	update: function(req, res) {
		Scenario.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},

	remove: function(req, res) {
		Scenario.findByIdAndRemove(req.params.id, req.body, function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	}
};

