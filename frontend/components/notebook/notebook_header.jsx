import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const NotebookHeader = ({notebook, notebookNotes}) => (
	<div className="notebook-header">
		<div className="notebook-index-header-title">
    	<h2>{notebook.title}</h2>
		</div>
		<div className="note-index-header-count">
	    <h4>{notebookNotes.length} {notebookNotes.length === 1 ? 'note' : 'notes'}</h4>
		</div>
  </div>
);

export default withRouter(NotebookHeader);
