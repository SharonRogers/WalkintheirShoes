// *****************CONTROLLER IS FOR FULL SAMPLE STORIES AND EYE IMAGES******

var Scenario = require('../models/scenarioSchema');





module.exports = {

// ******THIS METHOD IS TO CREATE AND POST THE FULL SAMPLE STORIES*********

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

	// *********METHOD IS CLOSED***************

// **********THIS METHOD IS TO FIND ALL OF THE DOCUMENTS OR QUERY USING ? IN THE URL OR FOR A SPECIFIC DOCUMENT****************

	read: function(req, res) {
		Scenario.find(req.query).exec(function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},

	// ***********METHOD IS CLOSED****************


// **********THIS METHOD IS TO PULL OUT AN INDIVIDUAL DOCUMENT AND UPDATE A PROPERTY OF IT***********

	update: function(req, res) {
		Scenario.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},

	// **********METHOD IS CLOSED***************

// ********THIS METHOD IS TO PULL OUT AN INDIVIDUAL DOCUMENT AND DELETE IT*****

	remove: function(req, res) {
		Scenario.findByIdAndRemove(req.params.id, req.body, function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	}

	// ***********METHOD IS CLOSED***********
};

// ************MODULE EXPORT IS CLOSED***************

