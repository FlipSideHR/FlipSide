var CoinbaseExchange = require('coinbase-exchange');
var websocket = new CoinbaseExchange.WebsocketClient();
websocket.on('message', function(data) {
  // if(data.reason !=='filled') return;
  console.log(data);
});