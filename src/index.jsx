import React from 'react';
import { render } from 'react-dom';
import { store, history } from 'store';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
import Client from 'routers/Client';
import { LoadFonts } from 'helpers/fonts';
import 'styles/global';

render(
  <Client store={store} history={history} />,
  document.getElementById('app'),
);

if ('serviceWorker' in navigator) runtime.register();
LoadFonts();
