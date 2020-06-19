import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage.js';
import {
  BrowserRouter as Router, 
  Route,
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component ={HomePage} exact/>
        </div>
      </Router>
    )
  }
}

export default App;
