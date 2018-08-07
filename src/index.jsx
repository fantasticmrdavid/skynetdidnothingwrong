import React from 'react';
import { render } from 'react-dom';
import Client from 'routers/Client';
import 'styles/global';

render(
  <Client />,
  document.getElementById('app'),
);
