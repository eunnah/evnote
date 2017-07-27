import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NoteIndexContainer from '../note_index/note_index_container';
import SidebarContainer from './sidebar_container';
import NoteDetailContainer from '../note_detail/note_detail_container';
import NewNoteContainer from '../new_note/new_note_container';
import NotebookContainer from '../notebook/notebook_container';
import NotebookNoteIndexContainer from '../notebook/notebook_note_index_container';

class Home extends Component {
// <Route exact path="/notebook/:notebookId" component={NotebookNoteIndexContainer} />

  render() {
    return (

      <section className="home">
        <div className="sidebar">
          <SidebarContainer />
        </div>
        <Switch>
          <div className="note-index">
            <Route path="/note" component={NoteIndexContainer} />
            <Route path="/notebook/:notebookId" component={NotebookNoteIndexContainer} />
            <Route path="/notebook" component={NotebookContainer} />
          </div>
        </Switch>
        <Switch>
          <Route path="/notebook/:notebookId/note/:noteId" component={NoteDetailContainer} />
          <Route path="/note/:noteId" component={NoteDetailContainer} />
          <Route path="/note/new-note" component={NewNoteContainer} />
        </Switch>
      </section>
    );
  }
}

export default Home;
