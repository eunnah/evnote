import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import {AuthRoute} from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>Evnote</h1>
      <GreetingContainer />
    </header>
    <Switch>
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
