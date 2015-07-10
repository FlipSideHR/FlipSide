angular.module('flipside.accounts', [])
  .controller('AccountsController', ['$scope', 'AccountsService', function($scope, AccountsService){

    // hold order data
    $scope.order = {};

    $scope.buy = function(){
      AccountsService.buy($scope.order.price, $scope.order.size);
    };
    
    $scope.sell = function(){
      AccountsService.buy($scope.order.price, $scope.order.size);
    };

  }]);
