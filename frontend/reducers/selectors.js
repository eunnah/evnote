import { values } from 'lodash';

export const selectAllNotes = ({ notes }) => Object.keys(notes).map(id => notes[id]);
// ORDER BY updated_at

export const selectSingleNote = ({ notes }, id) => {
  return notes[id] || {};
};

export const selectNotebookNotes = ({ notes }, notebookId) => Object.keys(notes)
  .filter(id => {return notebookId === notes[id];}).map(id => notes[id]);
