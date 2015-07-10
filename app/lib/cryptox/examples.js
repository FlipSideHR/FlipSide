var Cryptox = require("./index.js");

//var exchanges = ["coinbase", "btce", "bitfinex","bitstamp","bitx","oxr"].map(function(slug){
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
      console.log(slug,":getTicker:", result.data[0].last);
    }
  });
});

exchanges.forEach(function(exchange){
  var slug = exchange.properties.slug;
  exchange.getTicker({pair: "XBTUSD"}, function (err, result) {
    if (err || result.error) {
      console.log(slug,":getRate:", err || result.error);
    } else{
      console.log(slug,":getRate:", result.data[0]);
    }
  });
});
/*
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

//none are implemented
exchanges.forEach(function(exchange){
  var slug = exchange.properties.slug;
  exchange.getTrades({pair: "XBTUSD"}, function (err, result) {
    if (err || result.error) {
      console.log(slug,":getTrades:", err || result.error);
    } else{
      console.log(slug,":getTrades:", result.data);
    }
  });
});

//authenticated

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
