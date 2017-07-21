import * as APIUtil from '../util/session_api_util';
import * as Errors from './errors_actions';

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_LOGOUT_SUCCESS = "RECEIVE_LOGOUT_SUCCESS";

export const requestSignup = user => dispatch => {
  return APIUtil.signup(user).then(
    currentUser => {
      dispatch(receiveCurrentUser(currentUser));
      dispatch(Errors.clearErrors());
    },
    error => dispatch(Errors.receiveErrors(error.responseJSON))
  );
};

export const requestLogin = user => dispatch => {
  return APIUtil.login(user).then(
    currentUser => {
      dispatch(receiveCurrentUser(currentUser));
      dispatch(Errors.clearErrors());
    },
    error => dispatch(Errors.receiveErrors(error.responseJSON))
  );
};

export const requestGuestLogin = () => dispatch => {
  return APIUtil.login({
    username: 'guest',
    password: 'password'
  }).then(
    currentUser => {
      dispatch(receiveCurrentUser(currentUser));
      dispatch(Errors.clearErrors());
    },
    error => dispatch(Errors.receiveErrors(error.responseJSON))
  );
};

export const requestLogout = () => dispatch => {
  return APIUtil.logout().then(
    currentUser => dispatch(receiveCurrentUser(null)),
    error => dispatch(Errors.receiveErrors(error.responseJSON))
  );
};

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});
