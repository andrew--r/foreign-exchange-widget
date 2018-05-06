// @flow
import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { store } from '~/state';
import { App } from '~/view/components/app';

export const Root = hot(module)(() => (
  <Provider store={store}>
    <App />
  </Provider>
));
