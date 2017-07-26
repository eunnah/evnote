import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

const redirect = () => (
    <Redirect to="/login" />
);

const Greeting = ({ currentUser, logout }) => {
  if (!currentUser) {
    return redirect();
  }
};

export default Greeting;
