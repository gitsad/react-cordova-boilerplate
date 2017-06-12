/**
 * Created by gitsad on 12.06.17.
 */
import React from 'react';

import { Route } from 'react-router';

import App from './containers/App';
import Login from './modules/auth/containers/Login';
import TodoApp from './modules/todo-app/containers/TodoApp';


export default (
  <Route path="/" component={App} >
    <Route path="/main" component={TodoApp} />
    <Route path="/login" component={Login} />
  </Route>
);