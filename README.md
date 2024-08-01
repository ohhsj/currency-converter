# Easy Currency Converter

A simple and flexible currency converter module designed for easy integration with both JavaScript projects and no-code platforms like FlutterFlow.

## Installation

For Node.js projects:

```bash
npm install easy-currency-converter
```

## API

- constructor(apiUrl): Create a new CurrencyConverter instance.
- apiUrl (optional): Specify a custom API endpoint. Default is 'https://api.exchangerate-api.com/v4/latest/USD'.
- init(): Initialize the converter by fetching the latest rates. Returns a Promise that resolves to true if successful, false otherwise.
- getRate(fromCurrency, toCurrency): Get the conversion rate between two currencies.
  fromCurrency: The currency to convert from (e.g., 'USD').
  toCurrency: The currency to convert to (e.g., 'EUR').
  Returns the conversion rate as a number.
- convert(amount, fromCurrency, toCurrency): Convert an amount from one currency to another.
  amount: The amount to convert.
  fromCurrency: The currency of the amount.
  toCurrency: The target currency.
- Returns the converted amount as a number.
  getLastUpdated(): Get the timestamp of the last rate update.
  Returns a Date object.
