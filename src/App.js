import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Signin from './components/pages/signin/signin';
import Dashboard from './components/pages/dashboard/dashboard';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './config/theme'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  Body {
    background-color: ${props => props.theme.backgroundColor};
    font-family: ${props => props.theme.stockFont};
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>

  );
}

export default App;
