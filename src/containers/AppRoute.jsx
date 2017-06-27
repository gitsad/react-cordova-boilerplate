import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from '../store/configure-store';
import MainView from '../views/MainView.jsx';

const store = configureStore();

const history = syncHistoryWithStore(hashHistory, store);

export default class AppRouteComponent extends Component {
    render() {
        return (
            <Router history={history}>
                <Route path="/" component={MainView} />
            </Router>
        );
    }
}

