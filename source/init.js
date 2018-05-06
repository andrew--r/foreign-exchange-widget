// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from '~/root';

export function init() {
  const targetNode = document.getElementById('app');

  if (targetNode) {
    ReactDOM.render(<Root />, targetNode);
  }
}
