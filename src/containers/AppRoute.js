import React from 'react';
import { Router, Route, hashHistory as history } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import auth from '../common/auth.js';
import * as CredentialsActions from '../actions/credentials-actions.js';
import Login from '../modules/auth/containers/Login.jsx';
import TodoApp from '../modules/todo-app/containers/TodoApp.jsx';
import credentialPropTypes from './CredentialPropTypes';

class AppRouteComponent extends React.Component {
  componentWillMount() {
    this.checkAuth = this.checkAuth.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);

    this._authenticated = this.props.credentials.authenticated;
    this._isCheckingInitialLogIn = true;
    this._shouldRouterUpdate = true;

    const { credentialsActions } = this.props;
    credentialsActions.checkCredentials();

    const handleLoggedIn = authenticated => {
      this._isCheckingInitialLogIn = false;
      if (authenticated) {
        credentialsActions.checkCredentialsSucess();
      } else {
        setTimeout(() => {
          credentialsActions.checkCredentialsFailure();
        });
      }
    };

    // If authenticated has value, that means we got answer if the user is logged in.
    // If authenticated is undefined that means callback will be called when finishes checking if logged in
    const authenticated = auth.loggedIn(handleLoggedIn);
    if (authenticated !== undefined) { handleLoggedIn(authenticated); }
  }
  componentDidMount() {
    this.checkIfToStopAppRouterRenders();
  }
  shouldComponentUpdate(nextProps) {
    // Each time props are about to update - switch url if needed
    this._authenticated = nextProps.credentials.authenticated;
    if (this.props.credentials.authenticated !== this._authenticated) {
      history.push('/');
    }
    return this._shouldRouterUpdate;
  }
  componentDidUpdate() {
    this.checkIfToStopAppRouterRenders();
  }
  checkIfToStopAppRouterRenders() {
    // After done checking and flushed to dom , do not update again
    if (!this._isCheckingInitialLogIn) {
      this._shouldRouterUpdate = false;
    }
  }


  render() {
    return (
      <Router history={history}>
        <Route path="/main" component={TodoApp} onEnter={this.checkAuth} />
        <Route path="/login" component={Login} />
        <Route path="*" onEnter={this.handleRedirect} />
      </Router>
    );
  }
}

if (__DEV__) {
  // Not needed or used in minified mode
  AppRouteComponent.propTypes = {
    credentials: credentialPropTypes.credentials,
    credentialsActions: credentialPropTypes.credentialsActions
  };
}

function mapStateToProps(state) {
  const credentials = state.credentials;
  return {
    credentials
  }
}

function mapDispatchToProps(dispatch) {
  return {
    credentialsActions: bindActionCreators(CredentialsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRouteComponent)
