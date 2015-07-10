angular.module('flipside.accounts', [])
  .controller('AccountsController', ['$scope', '$interval', 'AccountsService', function($scope, $interval, AccountsService){

    // hold order data
    $scope.order = {};
    
    $scope.wallets = [];    
    $scope.ordersList = [];


    $interval(function(){
      AccountsService.fetchWallets(function(wallets){
        $scope.wallets = wallets;                            
      });

      AccountsService.fetchOrders(function(orders){
        $scope.ordersList = orders.list;                            
      });
    }, 500);
      
    $scope.buy = function(){
      AccountsService.buy($scope.order.price, $scope.order.size);
    };
    
    $scope.sell = function(){
      AccountsService.sell($scope.order.price, $scope.order.size);
    };

  }]);
