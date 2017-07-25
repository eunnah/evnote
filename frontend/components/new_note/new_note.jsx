import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import NewNoteButton from './new_note_button';
import RTEToolsContainer from './rte_tools_container';

class NewNote extends Component {

  render() {
    return (

      <section className="new-note">
        <div className="rte-tools">
          <RTEToolsContainer />
        </div>
      </section>
    );
  }
}

export default NewNote;
