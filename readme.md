# Foreign exchange widget

Based on [react boilerplate](https://github.com/andrew--r/react-boilerplate).

```bash
npm start # starts dev server with hot reloading
npm run build # build project in production mode
npm run build:analyze # build project in production mode and starts webpack bundle analyzer
npm test # runs checks like linters, unit tests, etc
```

## Caveats

Widget is relatively simple, so view is not decomposed to multiple atomic components.

[currencylayer API](https://currencylayer.com/) provides an ability to set base currency only in paid version of API, so cross-currency exchange rates are automatically derived from base currency rates.

There is no fancy UI because I didn't have much time, and ugly but working product is better than beautiful but useless product.

Currencies are hardcoded, normally they should be loaded from server.

## Potential improvements

* Prettify UI
* Add unit tests for sagas and reducers
* Add end-to-end tests
* Allow user to edit target currency amount
* Add currency aliases ($, ₽, etc)
