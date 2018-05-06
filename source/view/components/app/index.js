// @flow
import { connect } from 'react-redux';
import { AppView } from './view';
import {
  setSourceCurrency,
  setTargetCurrency,
  setExchangeAmount,
} from '~/state/currency-exchange/actions';

import type { State } from '~/state';

export const App = connect(
  ({ user, currencyExchange }: State) => ({
    availableCurrencyIds: user.currencyIds,
    sourceCurrencyId: currencyExchange.sourceCurrencyId,
    targetCurrencyId: currencyExchange.targetCurrencyId,
    sourceCurrencyWallet:
      user.walletByCurrency[currencyExchange.sourceCurrencyId],
    targetCurrencyWallet:
      user.walletByCurrency[currencyExchange.targetCurrencyId],
    exchangeAmount: currencyExchange.amount,
  }),
  {
    onChangeSourceCurrency: setSourceCurrency,
    onChangeTargetCurrency: setTargetCurrency,
    onChangeExchangeAmount: setExchangeAmount,
  },
)(AppView);
