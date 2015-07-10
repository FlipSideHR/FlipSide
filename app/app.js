// Declare app level module which depends on views, and components
angular.module('flipside', [
  'ngRoute',
  'flipside.accounts',
  'flipside.accountsService'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'lib/accounts/account.html',
      controller: 'AccountsController',
    });
  $routeProvider.otherwise({redirectTo: '/'});
}]);
