import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Browser from './components/Browser';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/error" render={(props) => <ErrorPage {...props}/>}/>
        <Route path="/:owner/:repo" component={Browser} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
