import { calculateExchangeRate } from './selectors';

describe('foreignExchange selectors', () => {
  test('calculateExchangeRate', () => {
    const state = {
      foreignExchange: {
        rates: {
          baseCurrencyId: 'USD',
          data: {
            USD: 1,
            GBP: 0.73888,
            EUR: 0.836201,
          },
        },
      },
    };

    expect(
      calculateExchangeRate({
        state,
        sourceCurrencyId: 'USD',
        targetCurrencyId: 'GBP',
      }),
    ).toBe(0.73888);
    expect(
      calculateExchangeRate({
        state,
        sourceCurrencyId: 'USD',
        targetCurrencyId: 'EUR',
      }),
    ).toBe(0.836201);

    expect(
      calculateExchangeRate({
        state,
        sourceCurrencyId: 'EUR',
        targetCurrencyId: 'USD',
      }),
    ).toBe(1.1958847214963866);
    expect(
      calculateExchangeRate({
        state,
        sourceCurrencyId: 'GBP',
        targetCurrencyId: 'USD',
      }),
    ).toBe(1.35339974014725);

    expect(
      calculateExchangeRate({
        state,
        sourceCurrencyId: 'EUR',
        targetCurrencyId: 'GBP',
      }),
    ).toBe(0.8836153030192501);
    expect(
      calculateExchangeRate({
        state,
        sourceCurrencyId: 'GBP',
        targetCurrencyId: 'EUR',
      }),
    ).toBe(1.1317142161108706);
  });
});
