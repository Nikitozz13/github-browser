import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BrowserContainer from './components/Browser/BrowserContainer';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/:owner/:repo" component={BrowserContainer} />
        <Route exact path="/error" render={(props) => <ErrorPage {...props}/>}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
