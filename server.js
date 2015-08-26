/////////////Dependincies

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

//////////////Controllers
var scenariosCtrl = require('./controllers/scenariosCtrl');
var userStoriesCtrl = require('./controllers/userStoriesCtrl');
var testCtrl = require('./controllers/testCtrl');


///////////////////Express
var app = express();

///////////////////Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('./public'));
//////connects to front end

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