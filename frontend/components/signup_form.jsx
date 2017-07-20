import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.loggedIn) {
  //     this.props.history.push('/');
  //   }
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    return this.props.requestSignup(user);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
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
      <div className="login-form-container">
        <div className="create-account-tagline">Never forget your notes with Evnote!</div>
        <br /> <br />Create Account
        <form className="login-form-box">
          <br/>
          Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Email<br />
              <div className="center-input">
                <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                />
              </div>
            </label>
            <br/>
            <label>Password<br />
              <div className="center-input">
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
            </div>
            </label>
            <br/>
            <div className="button">
              <input type="submit" value="Sign Up" onClick={this.handleSubmit} />
            </div>
            <div className="button">
              <input type="submit" value="Guest Login" className="guest-login" onClick={this.props.requestGuestLogin} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);