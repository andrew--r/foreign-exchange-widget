// @flow
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '~/state/root-reducer';
import { rootSaga } from '~/state/sagas';

export type { State } from './root-reducer';

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f,
  ),
);

sagaMiddleware.run(rootSaga);
