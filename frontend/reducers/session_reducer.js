import { RECEIVE_CURRENT_USER }
         from '../actions/session_actions';

import merge from 'lodash/merge';

const _nullUser = {
  currentUser: null
};

const SessionReducer = function(state = _nullUser, action){
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return {
        currentUser: action.currentUser,
        errors: []
      };
    default:
      return state;
  }
};

export default SessionReducer;
