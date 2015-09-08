/////////////Dependincies

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var session = require('express-session');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

 ///////////////////Express
var app = express();

//////////////Controllers
var scenariosCtrl = require('./controllers/scenariosCtrl');
var userStoriesCtrl = require('./controllers/userStoriesCtrl');
var testCtrl = require('./controllers/testCtrl');
var signupCtrl = require('./controllers/signupCtrl');
var adminCtrl = require('./controllers/adminCtrl');
var userCtrl = require('./controllers/userCtrl');
var problemCtrl = require('./controllers/problemCtrl');
var shareCtrl = require('./controllers/shareCtrl');
var User = require('./models/userSchema');


///////////////////Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('./public'));
//////connects to front end

// *********Expands Server Capacity
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// // ************REQUIRED FOR PASSPORT**************
app.use(session({ secret: 'thesecretisasecret'}));
app.use(passport.initialize());
app.use(passport.session());


// integrating passport-local with username and password
passport.use('login', new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password',
	passReqToCallback : true
	}, 
	function(req, email, password, done) {
		
		User.findOne({ 'email' : email })
		.populate('stories')
		.exec(function(err, user) {
			console.log(user);
			if (err) return done(err);
			if(!user) {
				return done(null, false);
			};
			if (!user.validPassword(password)) {
				return done(null, false);
			};
			tempUser = user;
			delete tempUser.password;
			console.log("This is in the server tempuser", tempUser);
			return done(null, tempUser);
		})
	}
));

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(obj, done) {
	done(null, obj);
});


////////////////////Endpoints/////////////////////////

// ****************LOGIN FOR USERS****************

app.post ('/api/login', passport.authenticate('login', {
}),
	function(req, res) {
			console.log('$$$$$$$$$$$$$$$$$$ req.body for login', req.body);
			console.log('$$$$$$$$$$$$$$$$$$ req.user for login', req.user);
			res.status(200).json(req.user)
		 }
);

app.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/#/home');
});

// **************SIGNUP FOR USERS************
app.post ('/api/signup', signupCtrl.create);



// *************USER VIEW****************
app.put('/api/user/:id', userCtrl.updateUser);

// app.get('/api/user', userCtrl.userScenarios);



// ********FULL SAMPLE STORIES ENDPOINTS FOR SCENARIOS VIEW*********
app.get ('/api/scenarios', scenariosCtrl.read);
app.put('/api/addFollower/:scenarioId', scenariosCtrl.addFollower);



// ***********USER FRAMEWORK STORIES TO BE INTEGRATED AND USERSTORIES VIEW****
app.get ('/api/userStory', userStoriesCtrl.read);



// ***********TEST QUESTIONS FOR TEST VIEW***********
app.get ('/api/test', testCtrl.read);


// **************SHARE VIEW******************
app.post ('/api/shareyourstory', shareCtrl.createScenario);
app.post('/api/newimage', shareCtrl.saveImage);

app.post('./api/shareyourstory', shareCtrl.createProblem);



 // *************ADMIN PAGE***************
app.get('/api/getAllUsers', adminCtrl.getAllUsers);
app.delete('/api/user/:id', adminCtrl.removeUser);

app.get ('/api/getAllScenarios', adminCtrl.readScenarios);
app.put ('/api/updateScenarios/:scenarioid', adminCtrl.updateScenarios);
app.delete ('/api/removeSceanrios/:scenarioId', adminCtrl.removeScenarios);

// app.post ('/api/addUserStory', adminCtrl.createAddUserStory);
app.get ('/api/readAllUserStories', adminCtrl.readAllUserStories);
app.put ('/api/updateUserStory/:id', adminCtrl.updateUserStory);
app.delete ('/api/removeUserStory/:id', adminCtrl.removeUserStory);

// app.get ('/api/allProblems', );
// app.put
// app.delete

app.post ('/api/addTestItem', adminCtrl.addTestItem);
app.get ('/api/getAllTestItems', adminCtrl.getAllTestItems);
app.put ('/api/updateTestItem/:id', adminCtrl.updateTestItem);
app.delete ('/api/removeTestItem/:id', adminCtrl.removeTestItem);


////////////////////Connections
var port = 8000;
var  mongoUri = 'mongodb://localhost:27017/walkintheirshoes';

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log('connected to MongoDB at ' + mongoUri);
});

app.listen(port, function() {
	console.log('listening on port ', port);
});

