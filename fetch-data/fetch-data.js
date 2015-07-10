var CoinbaseAdapter = require('./coinbase-adapter.js');

function DataFetcher(exchange) {
  if (this.supportedExchanges[exchange]) {
    this.exchangeAdapter = new this.supportedExchanges[exchange]();
  } else {
    throw exchange + ' is not a supported exchange.';
  }
}

DataFetcher.prototype.supportedExchanges = {
  "coinbase": CoinbaseAdapter
};

DataFetcher.prototype.streamTo = function(callback) {
  this.exchangeAdapter.streamTo(callback);
};

module.exports = DataFetcher;
