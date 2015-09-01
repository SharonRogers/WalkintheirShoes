app.controller('userCtrl', function($scope, userService) {

	$scope.getUser = function() {
		console.log("verify getUser is running")
		$scope.userObj = userService.getUser();
		console.log("This is userObj from userCtrl", $scope.userObj);
	};
	
	$scope.getUser();

});