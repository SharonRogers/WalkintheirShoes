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
		var deferred = $q.defer();
		selected = newSelected;
		deferred.resolve(selected)
		return deferred.promise;
	};



	this.addFollower = function(newSelectedId) {
		var deferred = $q.defer()
		console.log('in the service')
		
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

	// var imageExtension = imageData.split(‘;’)[0].split(‘/’);
	// imageExtension = imageExtension[imageExtension.length — 1];


});