// @flow
import type { CurrencyId } from '~/common/types/currency';
import type { CurrencyExchangeAction } from '~/state/currency-exchange/actions';

export type CurrencyExchangeState = {|
  +sourceCurrencyId: CurrencyId,
  +targetCurrencyId: CurrencyId,
  +amount: number,
|};

export const initialState: CurrencyExchangeState = {
  sourceCurrencyId: 'GBP',
  targetCurrencyId: 'USD',
  amount: 0,
};

export function currencyExchangeReducer(
  state: CurrencyExchangeState = initialState,
  action: CurrencyExchangeAction,
): CurrencyExchangeState {
  switch (action.type) {
    case 'CURRENCY_EXCHANGE_SET_SOURCE_CURRENCY': {
      return {
        ...state,
        sourceCurrencyId: action.currencyId,
      };
    }

    case 'CURRENCY_EXCHANGE_SET_TARGET_CURRENCY': {
      return {
        ...state,
        targetCurrencyId: action.currencyId,
      };
    }

    case 'CURRENCY_EXCHANGE_SET_EXCHANGE_AMOUNT': {
      return {
        ...state,
        amount: action.amount,
      };
    }

    default: {
      return state;
    }
  }
}
