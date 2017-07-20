import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting_container';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import {AuthRoute} from '../util/route_util';

const App = () => (
  <div className="app">
    <header>
      <div className="bar-header"></div>
      <div className="create-account-logo"><img src={window.logoUrl} /></div>
      <GreetingContainer />
    </header>
    <Switch>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
