import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Signin from './components/pages/signin/signin';
import Dashboard from './components/pages/dashboard/dashboard';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  Body {
    background-color: #DCE1E3;
    margin: 0;
    padding: 0;
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Switch>
          <Route exact path="/" component={Signin}>
              <Signin />
          </Route>
          <Router path="/dashboard" component={Dashboard}>
              <Dashboard />
          </Router>
      </Switch>
    </div>
  );
}

export default App;
