import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import customFont from 'src/style/custom-font.scss';
import auth from '../../../common/auth.js';
import credentialPropTypes from '../../../containers/CredentialPropTypes';
import * as CredentialsActions from '../../../actions/credentials-actions.js';

const defaultProps = {
  route: undefined
};

export const propTypes = {
  credentials: credentialPropTypes.credentials,
  credentialsActions: credentialPropTypes.credentialsActions,
  route: PropTypes.shape({}),
};

class LoginComponent extends Component {
  componentWillMount() {
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      isMountedAndCreatedByRouter: false
    };
  }
  componentDidMount() {
    // Chnage 'isMountedAndCreatedByRouter' from false to true
    // only when generated from router for the first time.
    // For animation effect
    if (this.props.route !== undefined) {
      setTimeout(() => this.setState({ isMountedAndCreatedByRouter: true }));
    }
  }
  handleSubmit(e) {
    e.preventDefault();

    const { credentialsActions } = this.props;
    credentialsActions.addCredentials();

    const email = this._emailRef.value;
    const password = this._passwordRef.value;

    auth.login(email, password, (authenticated, hint) => {
      if (authenticated) {
        credentialsActions.addCredentialsSucess();
      } else {
        credentialsActions.addCredentialsFailure(hint);
      }
    });
  }
  render() {
    const { credentials } = this.props;
    const { isMountedAndCreatedByRouter } = this.state;
    const { checkingToken, loggingIn, hint } = credentials;
    const hideLogin = (!isMountedAndCreatedByRouter) || checkingToken || loggingIn;

    return (
      <div>
        <div>
          <span className={`${customFont.customFont} ${customFont.customFontJs}`} style={{ fontSize: '200px' }}>
            <span className={customFont.path1} />
            <span className={customFont.path2} />
          </span>
          <h1>
            TodoMVC example
          </h1>
        </div>
        <div>
          <h1>
            Login
          </h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input type="text" ref={ref => { this._emailRef = ref; }} placeholder="Email" />
            </div>
            <div>
              <input type="password" ref={ref => { this._passwordRef = ref; }} placeholder="Password" />
              <div>{hint && `Hint: ${hint}`}</div>
            </div>
            <div>
              <button type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

if (__DEV__) {
  // Not needed or used in minified mode
  LoginComponent.defaultProps = defaultProps;
  LoginComponent.propTypes = propTypes;
}

const Login = connect(state => ({ credentials: state.credentials }), dispatch => ({
  credentialsActions: bindActionCreators(CredentialsActions, dispatch)
}))(LoginComponent);

export default Login;
