import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Projects } from './Components/Projects';
import { Nav } from './Components/Nav';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
      <Nav />
    </Router>
  );
}

export default App;
