import React from 'react';

import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Header from './components/Header';

import Index from './pages/Index';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Index}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
