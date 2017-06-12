/**
 * Created by gitsad on 12.06.17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/containers/app';
import AppRoute from 'src/containers/app-route';
import '../style/main.scss';

ReactDOM.render(
  <App>
    <AppRoute />
  </App>,
  document.getElementById('app')
);
