import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { requestLogin, requestSignup, requestGuestLogin } from '../actions/session_actions';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  return {
    requestSignup: user => dispatch(requestSignup(user)),
    requestGuestLogin: () => dispatch(requestGuestLogin()),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
