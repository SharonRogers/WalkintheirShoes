// *********This is the front end controller for the scenarios view that will get all scenarios and repeat them as well as pull one selected story out of the list in the view*************

app.controller('scenariosCtrl', function($scope, $stateParams, $state, scenariosService) {
	
	// $scope.scenario;

	$scope.getScenarios = function() {
		console.log("getScenarios is running");
		scenariosService.getScenarios().then(function(res) {
			// console.log(res);
			$scope.scenarios = res;
			// console.log($scope.scenarios)
		});
	};
	$scope.getScenarios();

	var selectedPerson;

	$scope.getSelected = function(id) {
		console.log(id);
		scenariosService.setSelected(id).then(function(response){
			console.log("response in $scope.getSelected", response)
			$scope.scenario = response[0];
			scenariosService.addFollower(id).then(function(response) {
			$state.go('scenarios.selected', {selectedPerson: $scope.scenario.title});
				console.log(response);
			});
		});
	
			
	}; 
});