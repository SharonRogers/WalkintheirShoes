app.controller('loginCtrl', function($scope, userService) {
	
	$scope.getUsers = function() {
		console.log("getUsers is running");
		userService.getUsers().then(function(results) {
			$scope.users = results;
		});
	};

	$scope.getUsers();

	$scope.addUser = function() {
		var userInfo = {
			username: $scope.username,
			password: $scope.password
		}
		userService.addUser(userInfo).then(function(results) {
			console.log("addUser is running");
			console.log("userInfo", results)
			$scope.username = "";
			$scope.password = "";
		})
		
		
	};

	$scope.toggle = function() {
		$state.go('home/signup');
	}
})