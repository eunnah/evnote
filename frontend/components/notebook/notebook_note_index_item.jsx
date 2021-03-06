import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import moment from 'moment';

// need to include date created

const NotebookNoteIndexItem = ({ notebook, note, match }) => {
  const regex = /(<([^>]+)>)/ig;
  const activeClass = match.params.noteId === note.id ? "active" : "";

  return (
    <NavLink to={`/home/notebook/${notebook.id}/note/${note.id}`} activeClassName="active">
      <li className='note-index-item'>
          <h4 className="preview-title child">{ note.title }</h4>
          <h5 className="preview-time child">{moment(note.updated_at).fromNow()}</h5>
          <p className="preview-body child">{ note.body.replace(regex, "") }</p>
      </li>
  </NavLink>
);};

export default NotebookNoteIndexItem;
