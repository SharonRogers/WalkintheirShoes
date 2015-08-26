
var app = angular.module('mainApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider

	.state('home', {
		url: '/home',
		templateUrl: 'views/home.html',
		controller: 'mainCtrl'
	})

	.state('about', {
		url: '/about',
		templateUrl: 'views/about.html',
		controller: 'mainCtrl'
	})

	.state('scenarios', {
		url: '/seethroughtheireyes',
		templateUrl: 'views/scenarios.html',
		controller: 'scenariosCtrl'
	})

	.state('scenarios.selected', {
		url: '/seethroughtheireyes/:selected',
		templateUrl: 'views/selected.html',
		controller: 'scenariosCtrl'
	})

	.state('userStory', {
		url: '/yourselfintheirshoes',
		templateUrl: 'views/userStories.html',
		controller: 'userStoriesCtrl'
	})

	.state('userStory.personalStory', {
		url: '/personalStory',
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

})