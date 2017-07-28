import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NoteIndexContainer from '../note_index/note_index_container';
import SidebarContainer from './sidebar_container';
import NoteDetailContainer from '../note_detail/note_detail_container';
import NewNoteContainer from '../new_note/new_note_container';
import NotebookContainer from '../notebook/notebook_container';
import NewNotebookContainer from '../new_notebook/new_notebook_container';
import NotebookNoteIndexContainer from '../notebook/notebook_note_index_container';

class Home extends Component {

  render() {
    return (

      <section className="home">
        <div className="sidebar">
          <SidebarContainer />
        </div>
        <div className="note-index">
          <Switch>
            <Route strict path="/home/notebook/:notebookId/" component={NotebookNoteIndexContainer} />
            <Route path="/home/notebook" component={NotebookContainer} />
            <Route path="/home" component={NoteIndexContainer} />
          </Switch>
        </div>
        <Switch>
          <Route path="/home/notebook/:notebookId/note/:noteId" component={NoteDetailContainer} />
          <Route path="/home/notebook/new-notebook" component={NewNotebookContainer} />
          <Route path="/home/new-note" component={NewNoteContainer} />
          <Route path="/home/note/:noteId" component={NoteDetailContainer} />
        </Switch>
      </section>
    );
  }
}

export default Home;
