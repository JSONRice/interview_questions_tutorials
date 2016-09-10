app.controller('LinkedListController', [
  '$scope', 
  function ($scope) {   
    var sources = [
      '/templates/src/data_structures/linked_list/llist.h'
    ];
    
    $scope.getSources = function() { return sources; };

    var functions = [
    ];
    
    $scope.getFunctions = function() { return functions; };
  }
]);