// @flow
import { connect } from 'react-redux';
import { AppView } from './view';
import {
  setSourceCurrency,
  setTargetCurrency,
  setExchangeAmount,
} from '~/state/foreign-exchange/actions';

import type { State } from '~/state';

export const App = connect(
  ({ user, foreignExchange }: State) => ({
    availableCurrencyIds: user.currencyIds,
    sourceCurrencyId: foreignExchange.sourceCurrencyId,
    targetCurrencyId: foreignExchange.targetCurrencyId,
    sourceCurrencyWallet:
      user.walletByCurrency[foreignExchange.sourceCurrencyId],
    targetCurrencyWallet:
      user.walletByCurrency[foreignExchange.targetCurrencyId],
    exchangeAmount: foreignExchange.amount,
  }),
  {
    onChangeSourceCurrency: setSourceCurrency,
    onChangeTargetCurrency: setTargetCurrency,
    onChangeExchangeAmount: setExchangeAmount,
  },
)(AppView);
