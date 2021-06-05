// Mock External API
function CryptoCurrencyAPI() {
  this.getValue = function(coin) {
    console.log(`Calling Crypto API to get ${coin} price...`);
    
    switch(coin.toLowerCase()) {
      case 'bitcoin':
        return 38000;
      case 'ethereum':
        return 2775;
      case 'dogecoin':
        return 0.39;
    }
  }
}

function CryptoCurrencyAPIProxy() {
  this.api = new CryptoCurrencyAPI();
  this.cache = {};

  this.getValue = function(coin) {
    if(!this.cache[coin]) {
      console.log(`The value of ${coin} isn't stored in cache...`);
      this.cache[coin] = this.api.getValue(coin);
    }

    return this.cache[coin];
  }
}

const proxyAPI = new CryptoCurrencyAPIProxy();

console.log(proxyAPI.getValue('Bitcoin'));
console.log(proxyAPI.getValue('Bitcoin'));
console.log(proxyAPI.getValue('Ethereum'));
console.log(proxyAPI.getValue('Ethereum'));
console.log(proxyAPI.getValue('Dogecoin'));
console.log(proxyAPI.getValue('Dogecoin'));