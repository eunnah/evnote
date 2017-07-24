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

  componentWillUnmount() {
    this.props.clearErrors();
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
      <div className="signup-form">
      <header>
        <div className="bar-header"></div>
        <subheader>
          <div className="create-account-logo"><img src={window.logoUrl} /></div>
        </subheader>
      </header>
      <div className="login-form-container">
        <h1>Meet Evnote, your second brain.</h1>
        <div className="create-account-tagline">
          Capture, organize, and share notes from anywhere. Your best ideas are always with you and always in sync.
        </div>
        <br /> <br /><b>Create Account</b>
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
              <input value="Guest Login" className="guest-login" onClick={this.props.requestGuestLogin} />
            </div>
          </div>
        </form>
      </div>
    </div>
    );
  }
}

export default withRouter(SignupForm);
