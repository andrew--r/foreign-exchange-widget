import { delay } from 'redux-saga';
import { takeLatest, put, call, select } from 'redux-saga/effects';
import { loadForeignExchangeRates } from '~/api';
import { requestLoadExchangeRates } from '~/state/foreign-exchange/actions';

export function* loadForeignExchangeRatesSaga() {
  try {
    const { baseCurrencyId, currencyIds } = yield select((state) => ({
      baseCurrencyId: state.foreignExchange.rates.baseCurrencyId,
      currencyIds: state.user.currencyIds,
    }));
    const result = yield call(loadForeignExchangeRates, {
      baseCurrencyId,
      currencyIds,
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
    yield put(requestLoadExchangeRates());
    yield delay(1000000);
  }
}
