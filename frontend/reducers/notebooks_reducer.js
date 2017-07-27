import merge from 'lodash/merge';

import {
  RECEIVE_NOTEBOOK,
  RECEIVE_NOTEBOOKS,
  REMOVE_NOTEBOOK
} from '../actions/notebook_actions';

const NotebooksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_NOTEBOOKS:
      return action.notebooks;
    case RECEIVE_NOTEBOOK:
      const newNotebook = {[action.notebook.id]: action.notebook};
      return merge({}, state, newNotebook);
    case REMOVE_NOTEBOOK:
      delete newState[action.note.id];
      return newState;
    default:
      return state;
  }
};

export default NotebooksReducer;
