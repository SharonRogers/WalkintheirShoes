app.service('scenariosService', function($http, $q) {


	this.getScenarios = function() {
		var deferred = $q.defer();

		$http({
			method: 'GET',
			url: '/api/scenarios'
			// url: '/api/scenarios?_id=' + newSelected
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

	this.selected;
	this.setSelected = function(newSelected) {
		console.log("newselected", newSelected)
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: '/api/scenarios?_id=' + newSelected
		}).then(function(data) {
			console.log(data);
			// var results = data.data;	
			// console.log(results);
			selected = data.data
			deferred.resolve(data.data);
		}).catch(function(err) {
			console.log(err)
		})
		return deferred.promise;
		// return deferred.promise;
	};



	this.addFollower = function(newSelectedId) {
		var deferred = $q.defer()
		console.log('in the service', newSelectedId)
		
		$http({
			method: 'PUT',
			url: '/api/addFollower/' + newSelectedId
		}).then(function(data) {
			console.log(data);
			deferred.resolve(data);
		}).catch(function(err) {
			console.log(err);
		})
		return deferred.promise;
	};

	this.addScenarios = function(scenario) {
		console.log("scenario", scenario);
		var deferred = $q.defer();

		$http({
			method: 'POST',
			url: '/api/shareyourstory',
			data: scenario
		}).then(function(data) {
			var results = data.data;
		}).catch(function(err) {
			console.log(err)
		})
		return deferred.promise;
	};

	
});