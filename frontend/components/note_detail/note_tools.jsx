import React from 'react';
import ReactQuill from 'react-quill';
import Tags from './tags';
import Tag from './tag';
import NotebookSearch from './notebook_search';
import {Redirect, withRouter} from 'react-router-dom';

class NoteTools extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    console.log(this.props);
    return this.props.deleteNote(this.props.match.params.noteId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.notesCount !== this.props.notesCount && nextProps.notesCount !== 0 && this.props.firstNote) {
      return this.props.history.push(`/note/${this.props.firstNote.id}`);
    }
    else if (nextProps.notesCount === 0) {
      return this.props.history.push('/note');
    }
  }

  showInfo() {

  }

  render() {
    let note = this.props.note;
    return(
    <span className="note-detail-tools">
      <div className="note-detail-buttons">
        <div><button title="Note Info" id="info" className="note-detail-button" onClick={this.showInfo}></button></div>
        <div><button title="Delete Note" id="trash" className="note-detail-button" onClick={this.handleDelete}></button></div>
      </div>
      <div className="note-detail-options">
        <div className="notebook-header">
          <NotebookSearch note={note} />
        </div>
        <div className="tags-header">
          <Tags note={note} />
        </div>
      </div>
    </span>
  );
}
}

export default withRouter(NoteTools);
