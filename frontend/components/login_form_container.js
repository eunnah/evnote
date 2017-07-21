import { connect } from 'react-redux';
import LoginForm from './login_form';
import { requestLogin, requestSignup, requestGuestLogin } from '../actions/session_actions';
import { clearErrors } from '../actions/errors_actions';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  return {
    requestLogin: user => dispatch(requestLogin(user)),
    requestGuestLogin: () => dispatch(requestGuestLogin()),
    clearErrors: () => dispatch(clearErrors()),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
