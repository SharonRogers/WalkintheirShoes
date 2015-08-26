app.controller('scenariosCtrl', function($scope, $location, scenariosService) {
	

	$scope.getScenarios = function() {
		console.log("getScenarios is running");
		scenariosService.getScenarios().then(function(res) {
			console.log(res);
			$scope.scenarios = res;
		});
	};
	$scope.getScenarios();


	// $scope.getSelected = function(index) {
	// 	scenariosService.setSelected($scope.scenarios[index]);
	// };
})