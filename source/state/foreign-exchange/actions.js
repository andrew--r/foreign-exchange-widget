// @flow
import type { CurrencyId } from '~/common/types/currency';

type SetSourceCurrencyAction = {
  +type: 'CURRENCY_EXCHANGE_SET_SOURCE_CURRENCY',
  +currencyId: CurrencyId,
};

export function setSourceCurrency(
  currencyId: CurrencyId,
): SetSourceCurrencyAction {
  return {
    type: 'CURRENCY_EXCHANGE_SET_SOURCE_CURRENCY',
    currencyId,
  };
}

type SetTargetCurrencyAction = {
  +type: 'CURRENCY_EXCHANGE_SET_TARGET_CURRENCY',
  +currencyId: CurrencyId,
};

export function setTargetCurrency(
  currencyId: CurrencyId,
): SetTargetCurrencyAction {
  return {
    type: 'CURRENCY_EXCHANGE_SET_TARGET_CURRENCY',
    currencyId,
  };
}

type SetExchangeAmountAction = {
  +type: 'CURRENCY_EXCHANGE_SET_EXCHANGE_AMOUNT',
  +amount: number,
};

export function setExchangeAmount(amount: number): SetExchangeAmountAction {
  return {
    type: 'CURRENCY_EXCHANGE_SET_EXCHANGE_AMOUNT',
    amount,
  };
}

type RequestLoadExchangeRatesAction = {
  +type: 'CURRENCY_EXCHANGE_LOAD_RATES_REQUEST',
};

export function requestLoadExchangeRates(): RequestLoadExchangeRatesAction {
  return {
    type: 'CURRENCY_EXCHANGE_LOAD_RATES_REQUEST',
  };
}

export type ForeignExchangeAction =
  | SetSourceCurrencyAction
  | SetTargetCurrencyAction
  | SetExchangeAmountAction
  | RequestLoadExchangeRatesAction;
