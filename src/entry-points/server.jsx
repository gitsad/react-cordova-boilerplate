import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from 'src/containers/App.jsx';
import Login from 'src/modules/auth/containers/Login.jsx';

// Disable 'no-undef' rule for this export because it's required from server, which uses nodeJs
// eslint-disable-next-line no-undef
module.exports = ReactDOMServer.renderToString(
  <App>
    <Login />
  </App>
);
