/**
 * Created by gitsad on 12.06.17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app';
import AppRoute from 'src/routes';
import '../style/main.scss';

ReactDOM.render(
  <App>
    <AppRoute />
  </App>,
  document.getElementById('app')
);
