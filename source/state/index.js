// @flow
import { createStore, compose } from 'redux';
import { rootReducer } from './root-reducer';

export type { State } from './root-reducer';

const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  compose(window.devToolsExtension ? window.devToolsExtension() : (f) => f),
);
