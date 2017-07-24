import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Tags from './tags';
import Tag from './tag';
import Note from './note';
import NotebookSearch from './notebook_search';
import NoteTools from './note_tools';

class NoteDetail extends Component {

  render() {

    let note = this.props.note;

    if (!note) return null;

    return (
      <section className="note-detail">
        <div className="note-tools">
          <NoteTools note={note} />
        </div>
        <div className="notebook-search">
          <NotebookSearch note={note} />
        </div>
        <div className="tags">
          <Tags note={note} />
        </div>
        <div className="note">
          <Note note={note} />
        </div>
      </section>
    );
  }
}

export default NoteDetail;
