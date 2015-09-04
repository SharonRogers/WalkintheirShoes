// ************* CONTROLLER IS FOR SIGNUP PAGE****************

var User = require('../models/userSchema');

module.exports = {

	create: function(req, res) {
		console.log(req.body);

		User.findOne({ 'email' : req.body.email }, function(err, user) {
			console.log(err, user);

			if (err) {
				return res.json(err);
			} else {
				console.log('is this running');
				var newUser = new User();
				newUser.email = req.body.email;
				newUser.password = newUser.generateHash(req.body.password);
				newUser.firstname = req.body.firstname;
				console.log(newUser);
				newUser.save(function(err) {
					if (err) {
						console.log(err);
					} else {
						// passport.authenticate('local')(req, res, function () {
							res.json(req.user);
						// })
					}
					});				
				}
		});
	}
};

