import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import GreetingContainer from './greeting_container';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import HomeContainer from './home/home_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => (
  <div className="app">
    <Redirect to="/login" />
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </Switch>
    <ProtectedRoute path="/note" component={HomeContainer} />
  </div>
);

export default App;
