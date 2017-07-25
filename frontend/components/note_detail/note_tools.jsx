import React from 'react';
import ReactQuill from 'react-quill';
import Tags from './tags';
import Tag from './tag';
import NotebookSearch from './notebook_search';

const NoteTools = ({ note }) => (
  <span className="note-detail-tools">
    <div className="note-detail-buttons">
      <div><button title="Note Info" id="info" className="note-detail-button"></button></div>
      <div><button title="Delete Note" id="trash" className="note-detail-button"></button></div>
    </div>
    <div className="note-detail-options">
      <div className="notebook-header">
        <NotebookSearch note={note} />
      </div>
      <div className="tags-header">
        <Tags note={note} />
      </div>
    </div>

  </span>
);

export default NoteTools;
