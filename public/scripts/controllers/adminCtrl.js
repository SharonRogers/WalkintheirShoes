// ***********This is the front end controller for the admin view which will allow to update information in all collections*************

app.controller('adminCtrl', function($scope, $state, userService) {

	
	$state.go('admin')

	$scope.getUsers = function() {
		console.log("getUsers is running");
		userService.getUsers().then(function(results) {
			$scope.users = results;
		});
	};

	$scope.getUsers();
	
})