import React from 'react';
import { Link } from 'react-router-dom';

const NoteIndexHeader = ({notes}) => (
	<div className="note-index-header">
		<div className="note-index-header-title">
    	<h2>NOTES</h2>
		</div>
		<div className="note-index-header-count">
	    <h4>{notes.length} {notes.length === 1 ? 'note' : 'notes'}</h4>
		</div>
  </div>
);

export default NoteIndexHeader;
