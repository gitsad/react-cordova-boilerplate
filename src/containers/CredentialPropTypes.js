/**
 * Created by gitsad on 10.06.17.
 */
import PropTypes from 'prop-types';

export default {
  credentials: PropTypes.shape({
    authenticated: PropTypes.bool,
    checkingToken: PropTypes.bool,
    loggingIn: PropTypes.bool,
    hint: PropTypes.bool
  }).isRequired,
  credentialsActions: PropTypes.shape({
    clearCredentials: PropTypes.func.isRequired,
    checkCredentials: PropTypes.func.isRequired,
    checkCredentialsSucess: PropTypes.func.isRequired,
    checkCredentialsFailure: PropTypes.func.isRequired,
    addCredentials: PropTypes.func.isRequired,
    addCredentialsSucess: PropTypes.func.isRequired,
    addCredentialsFailure: PropTypes.func.isRequired
  }).isRequired,
};