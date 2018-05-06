// @flow
import React from 'react';
import { hot } from 'react-hot-loader';
import { App } from '~/components/app';
import { Hello } from '~/components/hello';

export const Root = hot(module)(() => (
  <App>
    <Hello />
  </App>
));
