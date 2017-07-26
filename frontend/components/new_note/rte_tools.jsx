import React from 'react';
import ReactQuill from 'react-quill';
import {withRouter} from 'react-router';
import {Redirect} from 'react-router-dom';

class RTETools extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      author_id: this.props.currentUser.id,
      notebook_id: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
    this.update = this.update.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  update(value) {
    this.setState({ body: value });
  }

  updateTitle(e) {
    this.setState({ title: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = this.state;
    return this.props.createNote({note});
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.notesCount !== this.props.notesCount) {
      return this.props.history.push(`/note/${nextProps.noteId}`);
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  redirect(e) {
    e.preventDefault();
    this.props.history.goBack();
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
        <form>
          <div className="rte-buttons">
            <input className="submit-note-button new-buttons" type="submit" value="Submit" onClick={this.handleSubmit} />
            <input className="cancel-note-button new-buttons" type="submit" value="Cancel" onClick={this.redirect} />
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

export default withRouter(RTETools);
