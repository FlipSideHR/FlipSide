var CoinbaseExchange = require('coinbase-exchange');

function CoinbaseAdapter() {
  this.websocket = new CoinbaseExchange.WebsocketClient();
}

CoinbaseAdapter.prototype.streamTo = function(callback) {
  this.websocket.on('message', function(data) {
    callback(data);
  });  
};

module.exports = CoinbaseAdapter;
