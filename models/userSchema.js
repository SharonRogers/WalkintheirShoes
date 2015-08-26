var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	favPerson: {type: String, required: true},
	favFood: {type: String, required: true},
	sigOther: {type: String, required: true}
});

module.exports = mongoose.model('userInfo', userSchema);