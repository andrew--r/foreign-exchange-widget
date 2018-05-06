// @flow
import type { CurrencyId } from '~/common/types/currency';
import type { ForeignExchangeAction } from '~/state/foreign-exchange/actions';

export type ForeignExchangeState = {|
  +sourceCurrencyId: CurrencyId,
  +targetCurrencyId: CurrencyId,
  +amount: number,
|};

export const initialState: ForeignExchangeState = {
  sourceCurrencyId: 'GBP',
  targetCurrencyId: 'USD',
  amount: 0,
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

    default: {
      return state;
    }
  }
}
