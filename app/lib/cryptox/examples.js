var Cryptox = require("./index.js");

// var exchanges = ["coinbase", "btce", "bitfinex","bitstamp","bitx"].map(function(slug){
var exchanges = ["coinbase"].map(function(slug){
  return new Cryptox(slug);
});

//public
exchanges.forEach(function(exchange){
  var slug = exchange.properties.slug;
  exchange.getTicker({pair: "XBTUSD"}, function (err, result) {
    if (err || result.error) {
      console.log(slug,":getTicker:", err || result.error);
    } else{
      console.log(slug,":getTicker:", result.data[0]);
    }
  });
});

exchanges.forEach(function(exchange){
  var slug = exchange.properties.slug;
  exchange.getRate({pair: "XBTUSD"}, function (err, result) {
    if (err || result.error) {
      console.log(slug,":getRate:", err || result.error);
    } else{
      console.log(slug,":getRate:", result.data[0]);
    }
  });
});


/*
{ pair: 'XBTUSD',
  asks:
   [ { price: 266.574, volume: 0.010001 },
     { price: 266.76, volume: 0.045 }
    ],
  bids:
   [ { price: 266.574, volume: 0.010001 },
     { price: 266.76, volume: 0.045 }
    ]
}
*/
exchanges.forEach(function(exchange){
  var slug = exchange.properties.slug;
  exchange.getOrderBook({pair: "XBTUSD"}, function (err, result) {
    if (err || result.error) {
      console.log(slug,":getOrderBook:", err || result.error);
    } else{
      console.log(slug,":getOrderBook: total bids:", result.data[0].bids.length, "total asks:", result.data[0].asks.length);
    }
  });
});



/*
  { pair: "XBTUSD",
    buys: [
      {price: 200, volume: 1.02}
    ],
    sells: [
      {price: 199, volume: 2.005}
    ]
  }
*/

exchanges.forEach(function(exchange){
  var slug = exchange.properties.slug;
  exchange.getTrades({pair: "XBTUSD"}, function (err, result) {
    if (err || result.error) {
      console.log(slug,":getTrades:", err || result.error);
    } else{
      console.log(slug,":getTrades:", result.data[0]);
    }
  });
});


//authenticated
/*
exchanges.forEach(function(exchange){
  var slug = exchange.properties.slug;
  exchange.getTransactions({pair: "XBTUSD"}, function (err, result) {
    if (err || result.error) {
      console.log(slug,":getTransactions:", err || result.error);
    } else{
      console.log(slug,":getTransactions:", result.data);
    }
  });
});
*/
