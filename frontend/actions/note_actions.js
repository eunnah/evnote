import * as APIUtil from '../util/note_api_util';
import * as Errors from './errors_actions';

export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

export const receiveNotes = notes => ({
  type: RECEIVE_NOTES,
  notes
});

export const receiveNote = payload => ({
  type: RECEIVE_NOTE,
  payload
});

export const removeNote = payload => ({
  type: REMOVE_NOTE,
  payload
});

export const createNote = note => dispatch => (
  APIUtil.createNote(note).then(note => {
    dispatch(receiveNote(note));
    dispatch(Errors.clearErrors());
  },
  error => dispatch(Errors.receiveErrors(error.responseJSON)))
);

export const editNote = (id, note) => dispatch => (
  APIUtil.editNote(id, note).then(note => {
    dispatch(receiveNote(note));
    dispatch(Errors.clearErrors());
  },
  error => dispatch(Errors.receiveErrors(error.responseJSON))
));

export const fetchNotes = () => dispatch => (
  APIUtil.fetchNotes().then(notes => (
    dispatch(receiveNotes(notes))
  ))
);

export const fetchNote = id => dispatch => (
  APIUtil.fetchNote(id).then(note => (
    dispatch(receiveNote(note))
  ))
);

export const deleteNote = (id) => dispatch => (
  APIUtil.deleteNote(id).then(note => (
    dispatch(removeNote(note))
  ))
);
