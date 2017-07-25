import React from 'react';
import ReactQuill from 'react-quill';

class RTETools extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'New Note Placeholder Title',
      body: '',
      author_id: this.props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
    this.update = this.update.bind(this);
    this.prevPath;
  }

  update(value) {
    this.setState({ body: value });
  }

  handleSubmit() {
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

  redirect() {
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
    return (

      <div className="rte-tools">
        <div className="rte-buttons">
            <input className="submit-note-button new-buttons" type="submit" value="Submit" onClick={this.handleSubmit} />        
            <input className="cancel-note-button new-buttons" type="submit" value="Cancel" onClick={this.redirect} />
        </div>
        <div className="new-note-form">
          <ReactQuill value={this.state.body}
                  onChange={this.update} />
        </div>
      </div>

    );
  }
}

export default RTETools;
