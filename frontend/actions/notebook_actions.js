import * as APIUtil from '../util/notebook_api_util';
import * as Errors from './errors_actions';

export const RECEIVE_NOTEBOOKS = 'RECEIVE_NOTEBOOKS';
export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';
export const EDIT_NOTEBOOK = 'EDIT_NOTEBOOK';
export const REMOVE_NOTEBOOK = 'REMOVE_NOTEBOOK';
export const RECEIVE_NOTES = 'RECEIVE_NOTES';

export const receiveNotes = notes => ({
  type: RECEIVE_NOTES,
  notes
});

export const receiveNotebooks = notebooks => ({
  type: RECEIVE_NOTEBOOKS,
  notebooks
});

export const receiveNotebook = notebook => ({
  type: RECEIVE_NOTEBOOK,
  notebook
});

export const removeNotebook = notebook => ({
  type: REMOVE_NOTEBOOK,
  notebook
});

export const createNotebook = notebook => dispatch => (
  APIUtil.createNotebook(notebook).then(notebook => {
    dispatch(receiveNotebook(notebook));
    dispatch(Errors.clearErrors());
  },
  error => dispatch(Errors.receiveErrors(error.responseJSON)))
);

export const editNotebook = (id, notebook) => dispatch => (
  APIUtil.editNotebook(id, notebook).then(notebook => {
    dispatch(receiveNotebook(notebook));
    dispatch(Errors.clearErrors());
  },
  error => dispatch(Errors.receiveErrors(error.responseJSON))
));

export const fetchNotebooks = () => dispatch => (
  APIUtil.fetchNotebooks().then(notebooks => (
    dispatch(receiveNotebooks(notebooks))
  ))
);

export const fetchNotebook = id => dispatch => (
  APIUtil.fetchNote(id).then(notebook => (
    dispatch(receiveNotebook(notebook))
  ))
);

export const deleteNotebook = (id) => dispatch => (
  APIUtil.deleteNotebook(id).then(notebook => (
    dispatch(removeNotebook(notebook))
  ))
);

export const fetchNotebookNotes = (id) => dispatch => (
  APIUtil.fetchNotebookNotes(id).then(notes => (
    dispatch(receiveNotes(notes))
  ))
);
