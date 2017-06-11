/**
 * Created by gitsad on 12.06.17.
 */
import React from 'react';

import {Router, Route, hashHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';


import configureStore from './store/configure-store';
import Login from './modules/auth/containers/Login';
import TodoApp from './modules/todo-app/containers/TodoApp';

const store = configureStore();

const history = syncHistoryWithStore(hashHistory, store);


export default (
  <Router history={history}>
    <Route path="/main" component={TodoApp} />
    <Route path="/login" component={Login} />
  </Router>
);