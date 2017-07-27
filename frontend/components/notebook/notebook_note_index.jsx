import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NotebookHeader from './note_index_header';
import NoteIndexItem from './note_index_item';

class NotebookNoteIndex extends Component {

  componentDidMount() {
    this.props.fetchNotebookNotes();
  }

  render() {
    const { notes } = this.props;
    if (!notes) return null;

    return (
      <section className="note-index">
        <div className="note-index-header">
          <NoteIndexHeader notes={notes} />
        </div>
        <div className="note-index-item-list">
        <ul>
          {notes.map(note => <NoteIndexItem key={note.id} note={note} />)}
        </ul>
        </div>
      </section>
    );
  }
}

export default NoteIndex;
