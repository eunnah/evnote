import * as APIUtil from '../util/note_api_util';

export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';

export const receiveNotes = notes => ({
  type: RECEIVE_NOTES,
  notes
});

export const receiveNote = note => ({
  type: RECEIVE_NOTE,
  note
});

export const createNote = note => dispatch => (
  APIUtil.createNote(note).then(note => (
    dispatch(receiveNote(note))
  ))
);

export const editNote = (id, note) => dispatch => (
  APIUtil.editNote(id, note).then(note => (
    dispatch(receiveNote(note))
  ))
);

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
