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

      <section className="notes-index">
        <ul>
          {notes.map(note => <NoteIndexItem key={note.id} note={note} />)}
        </ul>

        
      </section>
    );
  }
}

export default NoteIndex;
