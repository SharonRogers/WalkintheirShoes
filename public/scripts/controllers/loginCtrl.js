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
		console.log("addUser is running");
		var userInfo = {
			email: $scope.username,
			password: $scope.password,
			firstname: $scope.firstName
		}
		userService.addUser(userInfo).then(function(results) {
			console.log("userInfo in ctrl: ", results)
		})	
	};

	$scope.verifyUser = function() {
		console.log("verify user is running");
		var userInfo = {
			email: $scope.username,
			password: $scope.password
		}

		userService.verifyUser(userInfo).then(function(results) {
			console.log(".then from verifyUser:", results);
			$scope.userObj = results;
			console.log($scope.userObj)
			$state.go('user');
		})
	};

});