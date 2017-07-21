import { connect } from 'react-redux';
import NoteHeader from './note_header';
import { requestLogin, requestSignup } from '../actions/session_actions';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  return {
    requestLogin: user => dispatch(requestLogin(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
