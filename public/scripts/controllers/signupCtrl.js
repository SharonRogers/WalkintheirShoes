// **********This is the front end controller for the sign up view that creates a new user and saves that object to use for the user view****************

app.controller('signupCtrl', function($scope, $state, userService) {

	$scope.register = true;
	$scope.loginButtons = true;

	$scope.addUser = function() {
		console.log("addUser is running");
		var userInfo = {
			email: $scope.username,
			password: $scope.password,
			firstname: $scope.firstName
		}
		userService.addUser(userInfo).then(function(results) {
			console.log("userInfo in ctrl: ", results)
			$scope.userObj = results;
			console.log($scope.userObj);
			$state.go('user');
		})	
	};

})