// @flow
import { combineReducers } from 'redux';
import { userReducer } from '~/state/user';
import { currencyExchangeReducer } from '~/state/currency-exchange';

import type { UserState } from '~/state/user';
import type { CurrencyExchangeState } from '~/state/currency-exchange';

export type State = {
  user: UserState,
  currencyExchange: CurrencyExchangeState,
};

export const rootReducer: (
  state: State,
  action: any,
) => State = combineReducers({
  user: userReducer,
  currencyExchange: currencyExchangeReducer,
});
