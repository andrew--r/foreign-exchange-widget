// @flow
import { connect } from 'react-redux';
import {
  setSourceCurrency,
  setTargetCurrency,
  setExchangeAmount,
} from '~/state/foreign-exchange/actions';
import { calculateExchangeRate } from '~/state/foreign-exchange/selectors';
import { AppView } from './view';

import type { State } from '~/state';

export const App = connect(
  (state: State) => {
    const { user, foreignExchange } = state;
    const { sourceCurrencyId, targetCurrencyId } = foreignExchange;

    return {
      sourceCurrencyId,
      targetCurrencyId,
      availableCurrencyIds: user.currencyIds,
      sourceCurrencyWallet: user.walletByCurrency[sourceCurrencyId],
      targetCurrencyWallet: user.walletByCurrency[targetCurrencyId],
      exchangeAmount: foreignExchange.amount,
      exchangeRate: calculateExchangeRate({
        state,
        sourceCurrencyId,
        targetCurrencyId,
      }),
    };
  },
  {
    onChangeSourceCurrency: setSourceCurrency,
    onChangeTargetCurrency: setTargetCurrency,
    onChangeExchangeAmount: setExchangeAmount,
  },
)(AppView);
