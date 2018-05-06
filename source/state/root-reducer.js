// @flow
import { combineReducers } from 'redux';
import { userReducer } from '~/state/user';
import { foreignExchangeReducer } from '~/state/foreign-exchange';

import type { UserState } from '~/state/user';
import type { ForeignExchangeState } from '~/state/foreign-exchange';

export type State = {
  user: UserState,
  foreignExchange: ForeignExchangeState,
};

export const rootReducer: (
  state: State,
  action: any,
) => State = combineReducers({
  user: userReducer,
  foreignExchange: foreignExchangeReducer,
});
