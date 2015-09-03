// ***********This is the front end controller for the login view that will verify if the user is in the database and then return their information to be used on the user view**************

app.controller('loginCtrl', function($scope, $state, userService) {
	
	$scope.$state = $state;
	$scope.register = true;
	$scope.loginButtons = true;

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