import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import RiceTechNavbar from './components/ricetech-navbar';
import HomePage from './pages/home';
import ProjectsPage from './pages/projects';
import ResumePage from './pages/resume';

import './App.scss';

const App = () => (
  <div className="App">
    <RiceTechNavbar />
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/projects">
        <ProjectsPage />
      </Route>
      <Route path="/resume">
        <ResumePage />
      </Route>
      <Redirect from="*" to="/" />
    </Switch>
  </div>
);

export default App;
