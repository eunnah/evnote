import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NoteIndexContainer from '../note_index/note_index_container';
import SidebarContainer from './sidebar_container';
import NoteDetailContainer from '../note_detail/note_detail_container';

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
        <div className="note-detail">
          <Route path="/note/:noteId" component={NoteDetailContainer} />
        </div>
      </section>
    );
  }
}

export default Home;
