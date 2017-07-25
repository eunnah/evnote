import React from 'react';
import ReactQuill from 'react-quill';

class RTETools extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Title your note',
      body: '',
      author_id: this.props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
    this.update = this.update.bind(this);
    this.prevPath;
    this.updateTitle = this.updateTitle.bind(this);
  }

  update(value) {
    this.setState({ body: value });
  }

  updateTitle(value) {
    this.setState({ title: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = this.state;
    return this.props.createNote(note);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
  if (nextProps.location !== this.props.location) {
    this.prevPath = this.props.location;
  }
}

  redirect(e) {
    e.preventDefault();
    return () => (<Redirect to={this.prevPath} />);
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
    // console.log(this.state);
    return (

      <div className="rte-tools">
        <form>
          <div className="rte-buttons">
            <input className="submit-note-button new-buttons" type="submit" value="Submit" onClick={this.handleSubmit} />
            <input className="cancel-note-button new-buttons" type="submit" value="Cancel" onClick={this.redirect} />
          </div>

          <input type="text" id="new-note-title-editor" value={this.state.title} onChange={this.updateTitle}></input>

          <div className="new-note-text-editor">
            <ReactQuill value={this.state.body}
                    onChange={this.update}></ReactQuill>
          </div>
        </form>
      </div>

    );
  }
}

export default RTETools;
