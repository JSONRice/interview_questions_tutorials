app.directive('dataStructure', function () {
  var dataStructureTemplateCtrl = [
    '$scope', '$templateRequest', '$sce', 'AjaxService',
    function ($scope, $templateRequest, $sce, ajax) {
      function init() {
        $scope.file = angular.copy($scope.files);
        $scope.functions = angular.copy($scope.functions);
        $scope.description = angular.copy($scope.description);
        $scope.output = "";
      }

      init();

      // If the template is already loaded, it will be taken from the cache.      
      $scope.getFileContent = function (url) {
        ajax.getTemplate(url).then(function (html) {
          $scope.output += html;
        }, function () {
          console.error('Failed to find template at:' + url);
        });
      };
    }
  ];

  return {
    restrict: 'E',
    templateUrl: '../../templates/src/data_structures/data_structures.html',
    replace: true,
    scope: {
      sources: '=',
      text: '=',
      functions: '='
    },
    controller: dataStructureTemplateCtrl
  };
});