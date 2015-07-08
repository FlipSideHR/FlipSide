var CoinbaseExchange = require('coinbase-exchange');
var websocket = new CoinbaseExchange.WebsocketClient();
var publicClient = new CoinbaseExchange.PublicClient();
//default but this is how to select differnet products
publicClient.productID = "BTC-USD";

//bind a DOM element's innerHTML value to latest ticker value
module.exports.bindTo = function(el){
  //real-time update
  websocket.on('message', function(data) {
    if(el && data.reason === "filled"){
      el.innerHTML = data.price;
    }
  });

  //last known market price
  publicClient.getProductTicker(function(err, resp, data){
    console.log(data);
    el.innerHTML = data.price;
  });
};
