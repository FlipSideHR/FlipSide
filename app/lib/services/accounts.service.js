var cex = require('coinbase-exchange'); 
var accountCredentials = require('./sandbox');

angular.module('flipside.accountsService', [])
  .factory('AccountsService', function(){
    
    var authedClient = new cex.AuthenticatedClient(
      accountCredentials.key,
      accountCredentials.b64secret,
      accountCredentials.passphrase,
      accountCredentials.uri
    );

    var buy = function(price, size) {
      // execute the buy
    };

    var sell = function(price, size) {
      // execute the sell
    };
    return {
      buy: buy,
      sell: sell
    };
  });
