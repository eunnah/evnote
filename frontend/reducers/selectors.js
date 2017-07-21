import { values } from 'lodash';

export const selectAllNotes = ({ notes }) => Object.keys(notes).map(id => notes[id]);
