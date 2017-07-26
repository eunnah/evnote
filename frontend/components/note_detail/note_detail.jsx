import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Tags from './tags';
import Tag from './tag';
import NotebookSearch from './notebook_search';
import Note from './note';
import NoteTools from './note_tools';

class NoteDetail extends Component {

  render() {

    let note = this.props.note;
    let currentUser = this.props.currentUser;

    if (!note) return null;

    return (
      <section className="note-detail">
        <NoteTools note={note} currentUser={currentUser} />
        <div className="note">
          <Note note={note} currentUser={currentUser} />
        </div>
      </section>
    );
  }
}

export default NoteDetail;
