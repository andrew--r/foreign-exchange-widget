// @flow
import type { State } from '~/state';
import type { CurrencyId } from '~/common/types/currency';

export function calculateExchangeRate({
  state,
  sourceCurrencyId,
  targetCurrencyId,
}: {
  state: State,
  sourceCurrencyId: CurrencyId,
  targetCurrencyId: CurrencyId,
}) {
  const { data: ratesData, baseCurrencyId } = state.foreignExchange.rates;

  if (sourceCurrencyId === baseCurrencyId) {
    return ratesData[targetCurrencyId];
  }

  const sourceToBaseCurrencyRate = 1 / ratesData[sourceCurrencyId];
  const targetToBaseCurrencyRate = 1 / ratesData[targetCurrencyId];

  return sourceToBaseCurrencyRate / targetToBaseCurrencyRate;
}
