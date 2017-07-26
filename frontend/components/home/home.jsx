import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NoteIndexContainer from '../note_index/note_index_container';
import SidebarContainer from './sidebar_container';
import NoteDetailContainer from '../note_detail/note_detail_container';
import NewNoteContainer from '../new_note/new_note_container';

class Home extends Component {

  render() {
    return (

      <section className="home">
        <div className="sidebar">
          <SidebarContainer />
        </div>
        <div className="note-index">
          <NoteIndexContainer />
        </div>
        <Switch>
          <Route exact path="/note/new-note" component={NewNoteContainer} />
          <Route exact path="/note/:noteId" component={NoteDetailContainer} />
        </Switch>
      </section>
    );
  }
}

export default Home;
