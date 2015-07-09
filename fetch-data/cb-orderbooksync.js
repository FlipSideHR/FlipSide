var CoinbaseExchange = require('coinbase-exchange');
var orderbookSync = new CoinbaseExchange.OrderbookSync();
console.log(orderbookSync.book.state());