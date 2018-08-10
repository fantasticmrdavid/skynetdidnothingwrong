import React from 'react';
import { render } from 'react-dom';
import { store } from 'store';
import Client from 'routers/Client';
import 'styles/global';

render(
  <Client store={store} />,
  document.getElementById('app'),
);
