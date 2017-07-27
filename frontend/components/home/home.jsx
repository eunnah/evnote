import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NoteIndexContainer from '../note_index/note_index_container';
import SidebarContainer from './sidebar_container';
import NoteDetailContainer from '../note_detail/note_detail_container';
import NewNoteContainer from '../new_note/new_note_container';
import NotebookContainer from '../notebook/notebook_container';

class Home extends Component {

  render() {
    return (

      <section className="home">
        <div className="sidebar">
          <SidebarContainer />
        </div>
        <Switch>
          <div className="note-index">
            <Route exact path="/note" component={NoteIndexContainer} />
            <Route exact path="/notebook" component={NotebookContainer} />
            <Route exact path="/notebook/notebookId" component={NotebookNoteIndexContainer} />
          </div>
        </Switch>
        <Switch>
          <Route exact path="/note/new-note" component={NewNoteContainer} />
          <Route exact path="/note/:noteId" component={NoteDetailContainer} />
          <Route exact path="/notebook/:notebookId/note/:noteId" component={NoteDetailContainer} />
        </Switch>
      </section>
    );
  }
}

export default Home;
