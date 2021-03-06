import React, { Component } from 'react';
import { Route, Link, NavLink, withRouter } from 'react-router-dom';
import NotebookHeader from './notebook_header';
import NotebookNoteIndexItem from './notebook_note_index_item';

class NotebookNoteIndex extends Component {

  componentDidMount() {

    this.props.fetchNotebookNotes(this.props.match.params.notebookId);
    this.props.fetchNotebook(this.props.match.params.notebookId);
  }

  render() {
    
    const { notebookNotes, notebook, match } = this.props;
    if (!notebook) return null;

    return (
      <section className="notebook-note-index">
        <div className="notebook-header">
          <NotebookHeader notebook={notebook} notebookNotes={notebookNotes} />
        </div>
        <div className="notebook-note-index-item-list">
        <ul>
          {notebookNotes.map(note => <NotebookNoteIndexItem key={note.id} notebook={notebook} note={note} match={match} />)}
        </ul>
        </div>
      </section>
    );
  }
}

export default NotebookNoteIndex;
