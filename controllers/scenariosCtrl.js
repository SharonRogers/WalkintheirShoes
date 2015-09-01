// *****************CONTROLLER IS FOR FULL SAMPLE STORIES AND EYE IMAGES******

var Scenario = require('../models/scenarioSchema');
var User = require('../models/userSchema');
var AWS = require('aws-sdk');
var Keys = require('./keys.js');

AWS.config.update({
	accessKeyId: Keys.amazonAccess
	, secretAccessKey: Keys.amazonSecret
	, region: Keys.amazonRegion
});

var s3 = new AWS.S3();

module.exports = {

// ******THIS METHOD IS TO CREATE AND POST THE FULL SAMPLE STORIES*********

	create: function(req, res) {
		var newScenario = new Scenario();

			newScenario.title = req.body.title;
			newScenario.scenario = req.body.scenario;
			newScenario.resolution = req.body.resolution;
			newScenario.imageId = req.body.imageId;
			newScenario.eyeId = req.body.eyeId;

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
	},

	// ***********METHOD IS CLOSED***********

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
	},

	saveImage: function(req, res) {
		buf = new Buffer(req.body.imageBody.replace(/^data:image\/\w+;base64,/, ""), 'base64');

		var bucketName = 'walkintheirshoes/' + req.body.userEmail;
		var params = {
			Bucket: bucketName
			, Key: req.body.imageName
			, Body: buf
			, CongtentType: 'image/' + req.body.imageExtension
			, ACL: 'public-read'
		};

		s3.upload(params, function (err, data) {
			console.log(err, data);
			if (err) return res.status(500).send(err);
			res.json(data);
		});
	}

};

// ************MODULE EXPORT IS CLOSED***************

