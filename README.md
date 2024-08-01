# Easy Currency Converter

A simple and flexible currency converter module designed for easy integration with both JavaScript projects and no-code platforms like FlutterFlow.

## Installation

For Node.js projects:

```bash
npm install easy-currency-converter
```

## Functions

- constructor(apiUrl): Create a new CurrencyConverter instance.
- apiUrl (optional): Specify a custom API endpoint. Default is 'https://api.exchangerate-api.com/v4/latest/USD'.
- init(): Initialize the converter by fetching the latest rates. Returns a Promise that resolves to true if successful, false otherwise.
- getRate(fromCurrency, toCurrency): Get the conversion rate between two currencies.
- convert(amount, fromCurrency, toCurrency): Convert an amount from one currency to another.
- getLastUpdated(): Get the timestamp of the last rate update.
