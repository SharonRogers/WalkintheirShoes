
var app = angular.module('mainApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider

	.state('home', {
		url: '/home',
		templateUrl: 'views/home.html',
		controller: 'mainCtrl'
	})

	.state('home.signup', {
		url: '/signup',
		templateUrl: 'views/signUp.html',
		controller: 'signupCtrl'
	})

	.state('home.login', {
		url: '/login',
		templateUrl: 'views/login.html',
		controller: 'loginCtrl'
	})

	.state('user', {
		url: '/user',
		templateUrl: 'views/user.html',
		controller: 'userCtrl',
		resolve: {
			currentUser: function(userService) {
				return userService.getUser();
			}
		}
	})

	.state('about', {
		url: '/about',
		templateUrl: 'views/about.html'
	})

	.state('scenarios', {
		url: '/seethroughtheireyes',
		templateUrl: 'views/scenarios.html',
		controller: 'scenariosCtrl'
	})

	.state('scenarios.selected', {
		url: '/:selectedPerson',
		templateUrl: 'views/selected.html',
		controller: 'scenariosCtrl',
		// resolve: {
		// 	selectedPerson: function(scenarios){
		// 		return 
		// 	}
		// }
	})

	.state('userStory', {
		url: '/yourselfintheirshoes',
		templateUrl: 'views/userStories.html',
		controller: 'userStoriesCtrl'
	})

	.state('userStory.personalStory', {
		url: '/:personalStory',
		templateUrl: 'views/personalStory.html',
		controller: 'personalStory'
	})

	.state('test', {
		url: '/test',
		templateUrl: 'views/test.html',
		controller: 'testCtrl'
	})

	.state('share', {
		url: '/shareyourstory',
		templateUrl: 'views/share.html',
		controller: 'shareCtrl'
	})

	.state('admin', {
		url: '/admin',
		templateUrl: 'views/admin.html',
		controller: 'adminCtrl'
	})

});