var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// var Scenario = mongoose.model('Scenario', scenarioSchema);

var userSchema = new mongoose.Schema({
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	firstname: {type: String, required: true},
	favFamily: {type: String},
	favFood: {type: String},
	favFear: {type: String},
	favPlace: {type: String}
	// stories:[{
	// 	type: Schema.Types.ObjectId, ref: 'Scenario' }]
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);