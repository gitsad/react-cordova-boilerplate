import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/containers/app.jsx';
import AppRoute from 'src/containers/app-route.jsx';
import '../style/main.scss';

ReactDOM.render(
  <App>
    <AppRoute />
  </App>,
  document.getElementById('app')
);
