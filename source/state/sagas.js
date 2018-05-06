import { all } from 'redux-saga/effects';
import { foreignExchangeSaga } from '~/state/foreign-exchange/sagas';

export function* rootSaga() {
  yield all([foreignExchangeSaga()]);
}
