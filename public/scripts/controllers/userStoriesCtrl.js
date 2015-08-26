app.controller('userStoriesCtrl', function($scope, userMyStoryService) {

	$scope.getUserStories = function() {
		console.log("getUserStories is running");
		userMyStoryService.getMyStory().then(function(res) {
			console.log(res);
			$scope.userStories = res;
		});
	};
	$scope.getUserStories();
})