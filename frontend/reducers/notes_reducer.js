import merge from 'lodash/merge';

import {
  RECEIVE_NOTE,
  RECEIVE_NOTES,
  REMOVE_NOTE
} from '../actions/note_actions';

const NotesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_NOTES:
      return action.notes;
    case RECEIVE_NOTE:
      const newNote = {[action.payload.note.id]: action.payload.note};
      return merge({}, state, newNote);
    case REMOVE_NOTE:
      delete newState[action.payload.note.id];
      return newState;
    default:
      return state;
  }
};

export default NotesReducer;
