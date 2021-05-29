import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import RiceTechNavbar from './components/ricetech-navbar';
import HomePage from './pages/home';
import ProjectsPage from './pages/projects';
import ResumePage from './pages/resume';

const App = () => (
  <div className='App'>
    <RiceTechNavbar />
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/projects'>
        <ProjectsPage />
      </Route>
      <Route path='/resume'>
        <ResumePage />
      </Route>
    </Switch>
  </div>
);

export default App;
