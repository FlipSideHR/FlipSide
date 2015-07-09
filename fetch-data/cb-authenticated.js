var CoinbaseExchange = require('coinbase-exchange');
var authedClient = new CoinbaseExchange.AuthenticatedClient(
  key, b64secret, passphrase);