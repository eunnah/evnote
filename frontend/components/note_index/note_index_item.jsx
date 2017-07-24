import React from 'react';
import { Link } from 'react-router-dom';

// need to limit character count for title and body
// need to include date created

const NoteIndexItem = ({ note }) => (
  <li className="note-index-item">
    <Link to={`/note/${note.id}`}>
      <h4 className="preview-title child">{ note.title }</h4>
      <h5 className="preview-time child">2 days ago</h5>
      <p className="preview-body child">{ note.body }</p>
    </Link>
  </li>
);

export default NoteIndexItem;
