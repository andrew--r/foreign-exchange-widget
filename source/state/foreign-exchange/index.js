// @flow
import type { DataState } from '~/common/types/common';
import type { CurrencyId } from '~/common/types/currency';
import type { ForeignExchangeAction } from '~/state/foreign-exchange/actions';

export type ForeignExchangeState = {|
  +sourceCurrencyId: CurrencyId,
  +targetCurrencyId: CurrencyId,
  +amount: number,
  +rates: {
    +baseCurrencyId: CurrencyId,
    +dataState: DataState,
    +data: {
      +[key: CurrencyId]: number,
    },
  },
|};

export const initialState: ForeignExchangeState = {
  sourceCurrencyId: 'GBP',
  targetCurrencyId: 'USD',
  amount: 0,
  rates: {
    baseCurrencyId: 'USD',
    dataState: 'notAsked',
    data: {},
  },
};

export function foreignExchangeReducer(
  state: ForeignExchangeState = initialState,
  action: ForeignExchangeAction,
): ForeignExchangeState {
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

    case 'CURRENCY_EXCHANGE_LOAD_RATES_REQUEST': {
      return {
        ...state,
        rates: {
          ...state.rates,
          dataState: 'loading',
        },
      };
    }

    case 'CURRENCY_EXCHANGE_LOAD_RATES_FAIL': {
      return {
        ...state,
        rates: {
          ...state.rates,
          dataState: 'failed',
        },
      };
    }

    case 'CURRENCY_EXCHANGE_LOAD_RATES_SUCCESS': {
      return {
        ...state,
        rates: {
          ...state.rates,
          dataState: 'loaded',
          data: action.rates,
        },
      };
    }

    default: {
      return state;
    }
  }
}
