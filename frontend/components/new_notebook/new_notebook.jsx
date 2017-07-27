import React from 'react';
import {Redirect, withRouter} from 'react-router-dom';

class NewNotebook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      author_id: this.props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
  }

  updateTitle(e) {
    this.setState({ title: e.currentTarget.value });
  }

  updateDescription(e) {
    this.setState({ description: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const notebook = this.state;
    return this.props.createNotebook({notebook});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.notebooksCount !== this.props.notebooksCount) {
      return this.props.history.push(`/notebook/${nextProps.notebookId}`);
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

      <div className="new-notebook">
        <div className="new-notebook-errors">
          {this.renderErrors()}
        </div>
        <form>
          <div className="new-notebook-form">
            <input className="new-notebook-title" type="text" id="new-notebook-title-editor" value={this.state.title} placeholder={"Title your notebook"} onChange={this.updateTitle} />
            <input className="new-notebook-description" type="text" id="new-notebook-description-editor" value={this.state.body} placeholder={"Your notebook description"} onChange={this.updateDescription} />
          </div>
          <div className="new-notebook-buttons">
            <input className="submit-notebook-button new-buttons" type="submit" value="Submit" onClick={this.handleSubmit} />
            <input className="cancel-notebook-button new-buttons" type="submit" value="Cancel" onClick={this.redirect} />
          </div>
        </form>
      </div>

    );
  }
}

export default withRouter(NewNotebook);
