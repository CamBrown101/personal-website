import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Components/Home';
import { Nav } from './Components/Nav';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      <Nav></Nav>
    </Router>
  );
}

export default App;
