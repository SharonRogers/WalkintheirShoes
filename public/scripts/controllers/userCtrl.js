// ********This is the front end controller for the user view which will show all user information including a repeat of selected stories, person info for user stories, any shared stories, and an ability to update or remove user profile****

app.controller('userCtrl', function($scope, userService, currentUser) {

	// $scope.getUser = function() {
	// 	console.log("verify getUser is running")
	// 	$scope.userObj = userService.getUser();
	// 	console.log("This is userObj from userCtrl", $scope.userObj);
	// };
	
	// $scope.getUser();

	$scope.userObj = currentUser;
	console.log(currentUser);

});