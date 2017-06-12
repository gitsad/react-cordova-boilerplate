/**
 * Created by gitsad on 12.06.17.
 */
import React from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configure-store.js';
import DevTools from './containers/DevTools';

import routes from './routes';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);



export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          {routes}
        </Router>
      </Provider>
    );
  }
}
