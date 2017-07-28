import React from 'react';
import ReactQuill from 'react-quill';
import {Redirect, withRouter} from 'react-router-dom';

class Note extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: this.props.note.title,
      body: this.props.note.body,
      author_id: this.props.currentUser.id,
      notebook_id: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  update(value) {
    this.setState({ body: value });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.noteId !== nextProps.match.params.noteId) {
      this.setState(
        {
          title: nextProps.note.title,
          body: nextProps.note.body,
          author_id: nextProps.currentUser.id,
          notebook_id: 1
        }
      );
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  updateTitle(e) {
    this.setState({ title: e.currentTarget.value });
  }

  handleSubmit(e) {
    console.log(this.props);
    e.preventDefault();
    const note = {note: this.state};
    return this.props.editNote(this.props.match.params.noteId, note);
  }

  renderErrors() {

    return(
      <ul>

        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (

      <div className="rte-tools">
        <div className="RTE-render-errors">
          {this.renderErrors()}
        </div>
        <form>
          <div className="rte-buttons">
            <input className="submit-note-button new-buttons" type="submit" value="Save" onClick={this.handleSubmit} />
          </div>

          <div className="new-note-text-editor">
            <input className="my-editing-area" type="text" id="new-note-title-editor" value={this.state.title} placeholder={"Title your note"} onChange={this.updateTitle} />
            <ReactQuill value={this.state.body} onChange={this.update}>
          </ReactQuill>
          </div>
        </form>
      </div>

    );
  }
}

export default withRouter(Note);
