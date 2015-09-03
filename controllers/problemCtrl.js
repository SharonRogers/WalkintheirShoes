// *******************CONTROLLER IS FOR A LIST OF COMMON PROBLEMS AND USUAL COMMENTS************

var Problem = require('../models/problemSchema');

module.exports = {


// **********THIS METHOD IS TO FIND ALL OF THE DOCUMENTS OR QUERY USING ? IN THE URL OR FOR A SPECIFIC DOCUMENT****************

	read: function(req, res) {
		Problem.find(req.query).exec(function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	}

	// ***********METHOD IS CLOSED****************

};


