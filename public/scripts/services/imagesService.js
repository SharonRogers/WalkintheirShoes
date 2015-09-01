app.factory('imagesService', function($http) {
	var service = {};

	service.storeImage = function(imageData, filename) {
		var imageExtension = imageData.split(';')[0].split('/');
		imageExtension = imgeExtension[imageExtension.length - 1];

		var newImage = {
			imageName: filename,
			imageBody: imageData,
			imageExtension: imageExtension,
			userEmail: 'sarahmaetennessee@gmail.com'
		}

		return $http.post('/api/newimage', newImage)
	}
	return service;
});