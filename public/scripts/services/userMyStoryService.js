app.service('userMyStoryService', function($http, $q) {
	
	this.getMyStory = function() {
		var deferred = $q.defer();

		$http({
			method: 'GET',
			url: '/api/userStory'
		}).then(function(data) {
			console.log(data);
			var results = data.data;
			deferred.resolve(results);
		}).catch(function(err) {
			console.log(err)
		})
		return deferred.promise;
	};
});