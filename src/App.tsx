import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="home" component={Home} />
      </Switch>
       <Nav></Nav>
    </Router>
    <div className="App">
      <h1>Cam Brown</h1>
    </div>
  );
}

export default App;
