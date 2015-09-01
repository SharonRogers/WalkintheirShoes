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
var loginCtrl = require('./controllers/loginCtrl');
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
		
		User.findOne({ 'email' : email }, function (err, user) {
			console.log(user);
			if (err) return done(err);
			if(!user) {
				return done(null, false);
			};
			if (!user.validPassword(password)) {
				return done(null, false);
			};
			return done(null, user);
			}
		);
	}
));

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(obj, done) {
	done(null, obj);
});


////////////////////Endpoints

// ********FULL SAMPLE STORIES ENDPOINTS FOR SCENARIOS VIEW*********
app.post ('/api/Scenarios', scenariosCtrl.create);
app.get ('/api/Scenarios', scenariosCtrl.read);
app.put ('/api/Scenarios/:id', scenariosCtrl.update);
app.delete ('/api/Scenarios/:id', scenariosCtrl.remove);


// ***********USER FRAMEWORK STORIES TO BE INTEGRATED AND USERSTORIES VIEW****
app.post ('/api/userStory', userStoriesCtrl.create);
app.get ('/api/userStory', userStoriesCtrl.read);
app.put ('/api/userStory/:id', userStoriesCtrl.update);
app.delete ('/api/userStory/:id', userStoriesCtrl.remove);


// ***********TEST QUESTIONS FOR TEST VIEW***********
app.post ('/api/test', testCtrl.create);
app.get ('/api/test', testCtrl.read);
app.put ('/api/test/:id', testCtrl.update);
app.delete ('/api/test/:id', testCtrl.remove);

// **************SIGNUP FOR USERS************
app.post ('/api/signup', loginCtrl.create);
app.get ('/api/signup', loginCtrl.read);
app.put ('/api/signup/:id', loginCtrl.update);
app.delete ('/api/signup/:id', loginCtrl.remove);


app.post('/api/newimage', ScenariosCtrl.saveImage);


app.post ('/api/login', passport.authenticate('login', {
	failureRedirect : '/#/home',
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

app.put('/api/addFollower/:scenarioId', scenariosCtrl.addFollower);


// ********ADD ABILITY FOR SHARE VIEW*********
app.post ('/api/shareyourstory', scenariosCtrl.create);
app.get ('/api/shareyourstory', scenariosCtrl.read);
app.put ('/api/shareyourstory/:id', scenariosCtrl.update);
app.delete ('/api/shareyourstory/:id', scenariosCtrl.remove);



 

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