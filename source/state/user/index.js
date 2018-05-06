// @flow
import type { CurrencyId } from '~/common/types/currency';
import type { Wallet } from '~/common/types/wallet';

export type UserState = {|
  +currencyIds: CurrencyId[],
  +walletByCurrency: {
    [key: CurrencyId]: Wallet,
  },
|};

export const initialState: UserState = {
  currencyIds: ['GBP', 'USD', 'EUR'],
  walletByCurrency: {
    GBP: {
      currencyId: 'GBP',
      balance: 10,
    },
    USD: {
      currencyId: 'USD',
      balance: 50.24,
    },
    EUR: {
      currencyId: 'EUR',
      balance: 22.51,
    },
  },
};

export function userReducer(
  state: UserState = initialState,
  action: { type?: string } = {},
): UserState {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
