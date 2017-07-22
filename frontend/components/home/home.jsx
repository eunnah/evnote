import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NoteIndex from '../note_index/note_index';
import Sidebar from './sidebar';
import NoteDetailContainer from '../note_detail/note_detail_container';

class Home extends Component {

  render() {
    return (

      <section className="home">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="note-index">
          <NoteIndexContainer />
        </div>
        <div className="note-detail">
          <NoteDetailContainer />
        </div>
        <Route path="/home/note/:noteId" component={NoteDetailContainer} />
      </section>
    );
  }
}

export default Home;
