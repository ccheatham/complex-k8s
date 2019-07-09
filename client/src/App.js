import React, { Component } from 'react';
import logo from './me.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Links from './Links';
import About from './About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">This, that, and the other</h1>
          </header>
          <header className="App-header">
            <Link to="/">Home</Link>
            <Link to="/links">Links</Link>
          </header>
          <div>
            <Route exact path="/" component={About} />
            <Route path="/links" component={Links} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
