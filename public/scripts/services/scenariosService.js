app.service('scenariosService', function($http, $q) {
	this.getScenarios = function() {
		var deferred = $q.defer();

		$http({
			method: 'GET',
			url: '/api/Scenarios'
		}).then(function(data) {
			console.log(data);
			var results = data.data;	
			console.log(results);
			deferred.resolve(results);
		}).catch(function(err) {
			console.log(err)
		})
		return deferred.promise;
	};

	var selected = '';
	this.setSelected = function(newSelected) {
		selected = newSelected;
	}
});