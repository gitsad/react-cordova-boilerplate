import React, { Component } from 'react';
import { Router, Route, hashHistory as history } from 'react-router';
import StartView from '../views/StartView.jsx';
import TodoApp from '../modules/todo-app/containers/TodoApp.jsx';

export default class AppRouteComponent extends Component {

  render() {
    return (
      <Router history={history}>
        <Route path="/" component={StartView} />
        <Route path="/main" component={TodoApp} onEnter={this.checkAuth} />
      </Router>
    );
  }
}

