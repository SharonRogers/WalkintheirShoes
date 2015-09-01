app.controller('userStoriesCtrl', function($scope, userMyStoryService) {

	$scope.getUserStories = function() {
		console.log("getUserStories is running");
		userMyStoryService.getMyStory().then(function(res) {
			console.log(res);
			$scope.userStories = res;
		});
	};
	$scope.getUserStories();

	$scope.getAllSubjects = function() {
		console.log("getting subjects is running");
		userMyStoryService.getSubjects().then(function(res) {
			console.log(res);
			$scope.subjects = res;
		});
	};
	$scope.getAllSubjects();
})