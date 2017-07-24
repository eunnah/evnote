import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

const redirect = () => (
    <Redirect to="/login" />
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => {
  if (!currentUser) {
    return redirect();
  }
};

export default Greeting;
