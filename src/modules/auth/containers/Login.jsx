import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CredentialsActions from '../../../actions/credentials-actions.js';

import { AuthInput } from '../components/AuthInput.jsx';
import { AuthButton } from '../components/AuthButton.jsx';
import { FormHeader } from '../components/FormHeader.jsx';

const defaultProps = {};
const propTypes = {};

class LoginComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      login: '',
      password: ''
    };
    this.inputs = {
      password: {
        onChange: (e) => this.onChangeInput(e, 'password'),
        type: 'password',
        placeholder: 'password',
      },
      login: {
        onChange: (e) => this.onChangeInput(e, 'login'),
        type: 'text',
        placeholder: 'login',
      }
    }
  }

  handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state)
  };

  onChangeInput = (event, input) => {
    this.setState({
        [input]: event.target.value
    })
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormHeader text="BoilerPlate Login"/>
          <AuthInput {...this.inputs.login} />
          <AuthInput {...this.inputs.password} />
          <AuthButton text="Login" />
        </form>
      </div>
    );
  }
}

if (__DEV__) {
  // Not needed or used in minified mode
  LoginComponent.defaultProps = defaultProps;
  LoginComponent.propTypes = propTypes;
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);