import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Signin from './components/pages/signin/signin';
import Dashboard from './components/pages/dashboard/dashboard';
import ViewScore from './components/pages/viewScore/viewScore';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './config/theme';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
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
                <Route path="/dashboard" component={Dashboard}>
                    <Dashboard />
                </Route>
                <Route path="/view-score" component={ViewScore} />
            </Switch>
        </div>
    </ThemeProvider>
  );
}

export default App;
