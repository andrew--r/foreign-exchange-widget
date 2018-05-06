import { delay } from 'redux-saga';
import { takeLatest, put, call, select } from 'redux-saga/effects';
import { loadForeignExchangeRates } from '~/api';
import { loadExchangeRates as createLoadExchangeRatesAction } from '~/state/foreign-exchange/actions';

export function* loadForeignExchangeRatesSaga(action) {
  try {
    const result = yield call(loadForeignExchangeRates, {
      baseCurrencyId: action.baseCurrencyId,
      currencyIds: action.currencyIds,
    });

    yield put({
      type: 'CURRENCY_EXCHANGE_LOAD_RATES_SUCCESS',
      rates: result.rates,
    });
  } catch (error) {
    yield put({ type: 'CURRENCY_EXCHANGE_LOAD_RATES_FAIL' });
  }
}

export function* foreignExchangeSaga() {
  yield takeLatest(
    'CURRENCY_EXCHANGE_LOAD_RATES_REQUEST',
    loadForeignExchangeRatesSaga,
  );

  while (true) {
    const { baseCurrencyId, currencyIds } = yield select((state) => ({
      baseCurrencyId: state.foreignExchange.rates.baseCurrencyId,
      currencyIds: state.user.currencyIds,
    }));

    yield put(
      createLoadExchangeRatesAction({
        baseCurrencyId,
        currencyIds,
      }),
    );
    yield delay(1000000);
  }
}
