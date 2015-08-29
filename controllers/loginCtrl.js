// ************* CONTROLLER IS FOR LOGIN PAGE****************

var User = require('../models/userSchema');

module.exports = {

	create: function(req, res) {
		console.log(req.body);

		var newUser = new User(req.body);

		newUser.save(function(err, result) {
			console.log("result", result);
			if (err) return res.status(500).send(err);
			else res.send(result);
		});

	},

	read: function(req, res) {
		User.find(req.query).exec(function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
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

	
};

