import React, { Component } from 'react';
import logo from './me.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Links from './Links';
import About from './About';
import Cards from './Cards';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">This, that, and the other</h1>
          </header>
          <header className="App OtherApp-header">
            <Link to="/" className="App-link">Home</Link>
            <Link to="/links" className="App-link">Links</Link>
            <Link to="/cards" className="App-link">Cards Test</Link>
            <a href="/g/graphql" className="App-link">GraphQL</a>
          </header>
          <div>
            <Route exact path="/" component={About} />
            <Route path="/links" component={Links} />
            <Route path="/cards" component={Cards} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
