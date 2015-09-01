app.controller('shareCtrl', function($scope, scenariosService) {
	
	$scope.addScenario = function() {
		var scenarioShared = {
			title: $scope.title,
			scenario: $scope.scenario,
			resolution: $scope.resolution,
			imageID: $scope.imageID
		}
		scenariosService.addScenarios(scenarioShared).then(function(results) {
			console.log("addScenario is running");
			console.log("scenarioShared", results)
		});
	};
});