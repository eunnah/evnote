import { CLEAR_ERRORS,
         RECEIVE_ERRORS }
         from '../actions/errors_actions';

import merge from 'lodash/merge';


const ErrorsReducer = function(state = [], action){
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default ErrorsReducer;
