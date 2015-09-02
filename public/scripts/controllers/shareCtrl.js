app.controller('shareCtrl', function($scope, scenariosService, $rootScope) {

	$scope.imageLink;

	$scope.images = [];

	$scope.addScenario = function(title, scenario, resolution, imageId) {
		var scenarioShared = {
			title: title,
			scenario: scenario,
			resolution: resolution,
			imageId: $scope.imageLink
		}
		console.log($scope.imageLink)
		scenariosService.addScenarios(scenarioShared).then(function(results) {
			console.log("addScenario is running");
			console.log("scenarioShared", results)
		});
	};
});