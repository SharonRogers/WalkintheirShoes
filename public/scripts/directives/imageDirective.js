app.directive('fileread', function (imageService) {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {
      elem.bind("change", function (changeEvent) {
          
        var reader = new FileReader();
        reader.onloadend = function (loadEvent) {
          var fileread = loadEvent.target.result;
          console.log(fileread);

          var TempArray = elem['context'].value.split('\\');
          var fileName = tempArray[tempArray.length - 1];

          imageService.storeImage(fileread, fileName)
          .then(function (result) {
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