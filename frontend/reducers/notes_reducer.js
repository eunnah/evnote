import merge from 'lodash/merge';

import {
  RECEIVE_NOTE,
  RECEIVE_NOTES
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
    default:
      return state;
  }
};

export default NotesReducer;
