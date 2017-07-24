import React from 'react';

const Note = ({ note }) => {
  if (!note) return null;

  return(
  <ul>
    <li>
      <h2>{note.title}</h2>
    </li>
    <li>{note.body}</li>
  </ul>);
};

export default Note;
