app.directive('fileread', function (imagesService) {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {
      console.log(scope, elem, attrs);
      elem.bind("change", function (changeEvent) {
          
        var reader = new FileReader();
        reader.onloadend = function (loadEvent) {
          var fileread = loadEvent.target.result;
          console.log(fileread);

          var tempArray = elem[0].value.split('\\');
          var fileName = tempArray[tempArray.length - 1];

          imagesService.storeImage(fileread, fileName)
          .then(function (result) {
            scope.imageLink = result.data.Location
            console.log(result.data)
            scope.images.unshift(result.data);
          }).catch(function (err) {
            console.log(err);
          })
        }
        
        reader.readAsDataURL(changeEvent.target.files[0]);
      });
    }
  }
});