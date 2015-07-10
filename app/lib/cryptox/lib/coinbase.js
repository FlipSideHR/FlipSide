"use strict";

var moment = require("moment");
var CoinbaseExchange = require("coinbase-exchange");
var publicClient = new CoinbaseExchange.PublicClient();

publicClient.productID = "BTC-USD";

var util = require("./util"); //custom functions

function CoinBase (options) {
    var self = this;
    self["options"] = options;

    self.getRate = function (options, callback) {
        self.getTicker(options, function(err, ticker) {
            var rate, data;
            rate = {
                timestamp: util.timestampNow(),
                error: "",
                data: []
            };
            if (err) {
                rate.error = err.message;
                return callback(err, rate);
            }
            rate.timestamp = ticker.timestamp;
            data = {
                pair: ticker.data[0].pair,
                rate: ticker.data[0].last
            };
            rate.data.push(data);
            callback(err, rate);
        });
    };

    self.getTicker = function (options, callback) {
        var ticker = {
          timestamp: util.timestampNow(),
          error: "",
          data: []
        };

        if(options.pair && options.pair != "XBTUSD") {
          ticker.error = "Unsupported Ticker";
          return callback(new Error("NotFound"), ticker);
        }

        publicClient.getProductTicker(function(err, resp, coinbaseTicker){
          if(err || coinbaseTicker.message == "NotFound") {
            return callback(new Error(err || "NotFound"), ticker);
          }

          ticker.timestamp = util.timestamp(coinbaseTicker.time);

          var data = {
            pair: self.properties.instruments[0].pair,
            last: parseFloat(coinbaseTicker.price),
            volume: parseFloat(coinbaseTicker.size),
          };

          ticker.data.push(data);
          callback(null, ticker);
        });
    };

    self.getOrderBook = function (options, callback) {
        var orderBook;
        var err = new Error("Method not implemented");
        orderBook = {
            timestamp: util.timestampNow(),
            error: err.message,
            data: []
        };
        callback(err, orderBook);
    };

    self.getTrades = function (options, callback) {
        var trades;
        var err = new Error("Method not implemented");
        trades = {
            timestamp: util.timestampNow(),
            error: err.message,
            data: []
        };
        callback(err, trades);
    };

    self.getFee = function (options, callback) {
        var fee;
        var err = new Error("Method not implemented");
        fee = {
            timestamp: util.timestampNow(),
            error: err.message,
            data: []
        };
        callback(err, fee);
    };

    self.getTransactions = function (options, callback) {
        var transactions;
        var err = new Error("Method not implemented");
        transactions = {
            timestamp: util.timestampNow(),
            error: err.message,
            data: []
        };
        callback(err, transactions);
    };

    self.getBalance = function (options, callback) {
        var balance;
        var err = new Error("Method not implemented");
        balance = {
            timestamp: util.timestampNow(),
            error: err.message,
            data: []
        };
        callback(err, balance);
    };

    self.getOpenOrders = function (options, callback) {
        var openOrders;
        var err = new Error("Method not implemented");
        openOrders = {
            timestamp: util.timestampNow(),
            error: err.message,
            data: []
        };
        callback(err, openOrders);
    };

    self.postSellOrder = function (options, callback) {
        var orderResult;
        var err = new Error("Method not implemented");
        orderResult = {
            timestamp: util.timestampNow(),
            error: err.message,
            data: []
        };
        callback(err, orderResult);
    };

    self.postBuyOrder = function (options, callback) {
        var orderResult;
        var err = new Error("Method not implemented");
        orderResult = {
            timestamp: util.timestampNow(),
            error: err.message,
            data: []
        };
        callback(err, orderResult);
    };

    self.cancelOrder = function (options, callback) {
        var orderResult;
        var err = new Error("Method not implemented");
        orderResult = {
            timestamp: util.timestampNow(),
            error: err.message,
            data: []
        };
        callback(err, orderResult);
    }
}

CoinBase.prototype.properties = {
    name: "Coinbase",              // Proper name of the exchange/provider
    slug: "coinbase",               // slug name of the exchange. Needs to be the same as the .js filename
    methods: {
        notImplemented: ["getOrderBook", "getTrades", "getFee", "getTransactions",
            "getBalance", "getOpenOrders", "postSellOrder", "postBuyOrder", "cancelOrder", "getLendBook", "getActiveOffers", "postOffer", "cancelOffer"],
        notSupported: []
    },
    instruments: [                  // all allowed currency/asset combinatinos (pairs) that form a market
        {
            pair: "XBTUSD"
        },
    ],
    publicAPI: {
        supported: true,            // is public API (not requireing user authentication) supported by this exchange?
        requires: []                // required parameters
    },
    privateAPI: {
        supported: true,            // is public API (requireing user authentication) supported by this exchange?
        requires: ["key", "secret", "passphrase"]
    },
    marketOrder: true,             // does it support market orders?
    infinityOrder: false,           // does it supports infinity orders?
                                    // (which means that it will accept orders bigger then the current balance and order at the full balance instead)
    monitorError: "",               //if not able to monitor this exchange, please set it to an URL explaining the problem
    tradeError: ""                  //if not able to trade at this exchange, please set it to an URL explaining the problem
};

module.exports = CoinBase;
