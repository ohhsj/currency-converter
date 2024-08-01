// currency-converter.js

class CurrencyConverter {
  constructor(apiUrl = 'https://api.exchangerate-api.com/v4/latest/USD') {
    this.API_URL = apiUrl;
    this.conversionRates = {};
    this.lastUpdated = null;
  }

  async init() {
    return await this.fetchRates();
  }

  async fetchRates() {
    try {
      const response = await fetch(this.API_URL);
      const data = await response.json();
      this.conversionRates = data.rates;
      this.lastUpdated = new Date();
      return true;
    } catch (error) {
      console.error('Error fetching conversion rates:', error);
      return false;
    }
  }

  getRate(fromCurrency, toCurrency) {
    if (!this.conversionRates[fromCurrency] || !this.conversionRates[toCurrency]) {
      throw new Error('Invalid currency');
    }
    return this.conversionRates[toCurrency] / this.conversionRates[fromCurrency];
  }

  convert(amount, fromCurrency, toCurrency) {
    if (!this.conversionRates[fromCurrency] || !this.conversionRates[toCurrency]) {
      throw new Error('Invalid currency');
    }
    const inUSD = amount / this.conversionRates[fromCurrency];
    return inUSD * this.conversionRates[toCurrency];
  }

  getLastUpdated() {
    return this.lastUpdated;
  }
}

module.exports = CurrencyConverter;
