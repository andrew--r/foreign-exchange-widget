// @flow
import type { CurrencyId } from '~/common/types/currency';

export function loadForeignExchangeRates({
  // base currency is unsupported by free api
  // baseCurrencyId,
  currencyIds,
}: {
  // baseCurrency: CurrencyId,
  currencyIds: CurrencyId[],
}): Promise<{
  rates: {
    [key: CurrencyId]: number,
  },
}> {
  return fetch(
    `http://apilayer.net/api/live?access_key=0898fc3bd854419b2417e5b0485de0a0&currencies=${currencyIds.join(
      ',',
    )}&format=1`,
    { method: 'GET' },
  )
    .then((response) => response.json())
    .then((result) => {
      if (!result.success) {
        throw new Error(result.error.info);
      }

      return {
        rates: currencyIds.reduce((rates, currencyId) => {
          rates[currencyId] = result.quotes[`USD${currencyId.toUpperCase()}`];
          return rates;
        }, {}),
      };
    });
}
