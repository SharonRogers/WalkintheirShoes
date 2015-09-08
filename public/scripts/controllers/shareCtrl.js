// ******This is the front end controller for the share view that will add a new object when it is submitted. It will also add a new problem as well.***********

app.controller('shareCtrl', function($scope, scenariosService, $rootScope) {
	

	$scope.images = [];

	$scope.addScenario = function(title, scenario, resolution, eyeId, imageId) {
		var scenarioShared = {
			title: title,
			scenario: scenario,
			resolution: resolution,
			eyeId: eyeId,
			imageId: imageId 
		}
		console.log(scenarioShared);
		scenariosService.addScenarios(scenarioShared).then(function(results) {
			console.log("addScenario is running");
			console.log("scenarioShared", results)
		});
	};
});