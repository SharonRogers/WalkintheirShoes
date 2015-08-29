app.controller('scenariosCtrl', function($scope, $stateParams, $state, scenariosService) {
	

	$scope.getScenarios = function() {
		console.log("getScenarios is running");
		scenariosService.getScenarios().then(function(res) {
			console.log(res);
			$scope.scenarios = res;
		});
	};
	$scope.getScenarios();

	$scope.getSelected = function(index) {
		scenariosService.setSelected($scope.scenarios[index]).then(function(response){
			console.log(response)
			$scope.scenario = response;
			$state.go('scenarios.selected', {selected: $scope.scenario.title})
		})
	
			
	}; 
})