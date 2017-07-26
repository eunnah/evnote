import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Tags from './tags';
import Tag from './tag';
import NotebookSearch from './notebook_search';
import NoteContainer from './note_container';
import NoteToolsContainer from './note_tools_container';

class NoteDetail extends Component {

  render() {

    let note = this.props.note;
    let currentUser = this.props.currentUser;

    if (!note) return null;

    return (
      <section className="note-detail">
        <NoteToolsContainer />
        <div className="note">
          <NoteContainer />
        </div>
      </section>
    );
  }
}

export default NoteDetail;
