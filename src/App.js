import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GeriatricsPage from './components/pages/GeriatricsPage';
import { Link,Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <Link to="geriatrics"> Geriatrics </Link>

          <Route path='/geriatrics' component={GeriatricsPage}></Route>
      </div>
    );
  }
}

export default App;
