import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NoteIndexHeader from './note_index_header';
import NoteIndexItem from './note_index_item';

class NoteIndex extends Component {

  componentDidMount() {
    this.props.fetchNotes();
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
