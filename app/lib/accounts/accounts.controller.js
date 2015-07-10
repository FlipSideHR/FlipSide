angular.module('flipside.accounts', [])
  .controller('AccountsController', ['$scope', '$interval', 'AccountsService', function($scope, $interval, AccountsService){

    // hold order data
    $scope.order = {};
    
    $scope.wallets = [];    
    $scope.ordersList = [];

    AccountsService.fetchWallets(function(wallets){
      $scope.wallets = wallets;                            
    });

    AccountsService.fetchOrders(function(orders){
      console.log(orders.list);
      $scope.ordersList = orders.list;                            
      console.log($scope.ordersList);
    });

    $scope.buy = function(){
      AccountsService.buy($scope.order.price, $scope.order.size);
    };
    
    $scope.sell = function(){
      AccountsService.sell($scope.order.price, $scope.order.size);
    };

  }]);
