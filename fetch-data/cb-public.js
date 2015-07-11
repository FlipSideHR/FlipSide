var CoinbaseExchange = require('coinbase-exchange');
var publicClient = new CoinbaseExchange.PublicClient();

//publicClient.productID = "BTC-USD";

publicClient.getProducts(function(err, response, data){
  // if(err || data == null) {
  //   return console.log(err);
  // }
  //console.log(response);
  // data.forEach(function(product){
  //   console.log(product.id);
  // });
  console.log(data);
});

// publicClient.getProductOrderBook({level:3}, function(err, resp, data){
//   console.log(data);
// });

publicClient.getProductOrderBook(function(err, response, data) {
  console.log(data);
});