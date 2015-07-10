// Make sure you 'require' from the right place! Check your directory.
var DataFetcher = require('../fetch-data/fetch-data.js');
var coinbaseFetcher = new DataFetcher('coinbase');

var transaction;
var transactions = [];
var newTransactions = [];
var candlestick;
var candlesticks = [];
var prices = [];

var newTransactionIndex = 0;
var timeInterval = 30000; // in milliseconds

// Establish a connection with Coinbase's market data
// feed. For each order that results in a trade, extract
// the relevant properties of that order.
coinbaseFetcher.streamTo(function(data) {
  if (data.type === 'match') {
    transaction = {
      price: data.price,
      size: data.size,
      time: data.time,
      epoch: Date.parse(data.time)
    };

    transactions.push(transaction);
    newTransactions.push(transaction);
  }
});

setInterval(function() {
  // Print all new transactions since the last update
  //-------------------------------------------------
  // if (transactions.length > 0) {
  //   for (var i = newTransactionIndex; i < transactions.length; i++) {
  //     console.log(transactions[i]);
  //   }

  //   newTransactionIndex = i;
  // }
  //-------------------------------------------------

  // Print an OHLC candlestick on each update
  //-------------------------------------------------
  if (newTransactions.length > 0) {

    prices = newTransactions.map(function(transaction) {
      return parseFloat(transaction.price);
    });

    candlestick = {
      open: prices[0],

      high: Math.max.apply(null, prices),

      low: Math.min.apply(null, prices),

      close: prices[ prices.length - 1 ],

      volume: newTransactions.reduce(function(total, transaction) {
        return total + parseFloat(transaction.size);
      }, 0),

      startTime: newTransactions[0].epoch,

      endTime: newTransactions[ newTransactions.length - 1 ].epoch,

      transactionCount: newTransactions.length
    };

    console.log(candlestick);
    candlesticks.push(candlestick);
    newTransactions = []; // Prepare for the next candlestick by clearing the array
  }
  //-------------------------------------------------
}, timeInterval); // Set the frequency of updates (unit is milliseconds)
