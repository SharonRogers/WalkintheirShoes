app.controller('loginCtrl', function($scope, $state, userService) {
	

	$scope.$state = $state;

	$scope.getUsers = function() {
		console.log("getUsers is running");
		userService.getUsers().then(function(results) {
			$scope.users = results;
		});
	};

	$scope.register = true;
	$scope.loginButtons = true;




	$scope.getUsers();

	$scope.addUser = function() {
		var userInfo = {
			email: $scope.username,
			password: $scope.password,
			firstname: $scope.firstName
		}
		userService.addUser(userInfo).then(function(results) {
			console.log("addUser is running");
			console.log("userInfo", results)
		})	
	};

	$scope.verifyUser = function() {
		var userInfo = {
			email: $scope.username,
			password: $scope.password,

		}
		userService.verifyUser(userInfo).then(function(results) {
			console.log("verify user is running");
			$state.go('user');
		})
	};


// 	var helpers = {};

// 	helpers.auth = function(req, res) {
// 	var map = {};
// 	map.isAuthenticated = req.isauthenticated();
// 	map.user = req.user;
// 	return map;
// }

// 	app.dynamicHelpers(helpers);


})