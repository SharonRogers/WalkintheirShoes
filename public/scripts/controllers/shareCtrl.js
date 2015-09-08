// ******This is the front end controller for the share view that will add a new object when it is submitted. It will also add a new problem as well.***********

app.controller('shareCtrl', function($scope, scenariosService, $rootScope) {

	$scope.imageLink;

	$scope.images = [];

	$scope.addScenario = function(title, scenario, resolution, imageId) {
		var scenarioShared = {
			title: title,
			scenario: scenario,
			resolution: resolution,
			imageId: $scope.imageLink,
			eyeId: $scope.imageLink
		}
		console.log($scope.imageLink)
		scenariosService.addScenarios(scenarioShared).then(function(results) {
			console.log("addScenario is running");
			console.log("scenarioShared", results)
		});
	};
});