app.service('userService', function($http, $q) {
	this.getUsers = function() {
		var deferred = $q.defer();

		$http({
			method: 'GET',
			url: '/api/signup'
		}).then(function(data) {
			console.log("This is GET call", data);
			var results = data.data;
			console.log(results);
		}).catch(function(err) {
			console.log(err)
		})
		return deferred.promise;
	};

	this.addUser = function(user) {
		console.log("user", user);
		var deferred = $q.defer();

		$http({
			method: 'POST', 
			url: '/api/signup/', 
			data: user
		}).then(function(data) {
			console.log("This is POST call for add user", data);
			var results = data.data;
			console.log(results);
		}).catch(function(err) {
			console.log(err)
		})
		return deferred.promise;
	};

	this.verifyUser = function(user) {
		var deferred = $q.defer();

		$http({
			method: 'POST',
			url: '/api/login',
			data: user
		}).then(function(data) {
			console.log(data.data);
			var results = data.data;
			deferred.resolve(results);
		})
		return deferred.promise;
	};

	this.updateUser = function(user) {
		var deferred = $q.defer();

		$http.put('/api/signup', {user}).
		then(function(data) {
			console.log("This is PUT call for add user", data);
			var results = data.data;
			console.log(results);
		})
		return deferred.promise;
	};

	this.removeUser = function(user) {
		var deferred = $q.defer();

		$http.delete('/api/signup', {user}).
		then(function(data) {
			var results = data.data;
		})
		return deferred.promise;
	};
	

});
