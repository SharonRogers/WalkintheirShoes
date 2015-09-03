// ***************CONTROLLER IS FOR THE SHARE YOUR STORY VIEW************

var Scenario = require('../models/scenarioSchema');
var Problem = require('../models/problemSchema');
var AWS = require('aws-sdk');
var Keys = require('../keys.js');


// *********ACCESS KEYS FOR AMAZON S3 AND SAVING IMAGES*************
AWS.config.update({
	accessKeyId: Keys.amazonAccess
	, secretAccessKey: Keys.amazonSecret
	, region: Keys.amazonRegion
});

var s3 = new AWS.S3();


module.exports = {

// ******THIS METHOD CREATES A NEW STORY AND SAVES AN IMAGE LOCATION TO IT****

	createScenario: function(req, res) {
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

		saveImage: function(req, res) {
		buf = new Buffer(req.body.imageBody.replace(/^data:image\/\w+;base64,/, ""), 'base64');

		var bucketName = 'walkintheirshoes/' + req.body.userEmail;
		var params = {
			Bucket: bucketName
			, Key: req.body.imageName
			, Body: buf
			, ContentType: 'image/' + req.body.imageExtension
			, ACL: 'public-read'
		};

		s3.upload(params, function (err, data) {
			console.log(err, data);
			if (err) return res.status(500).send(err);
			res.json(data);
		});
	},

// ******** THIS CREATES NEW COMMENTS AND RESPONSES FOR DIFFERENT SUBJECTS******

	createProblem: function(req, res) {
		var newProblem = new Problem();

			newProblem.subject = req.body.subject;
			newProblem.comments = req.body.comments[index].statement;
			newProblem.comments = req.body.comments[index].reason;

		newProblem.save(function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},

	// *********METHOD IS CLOSED***************

}