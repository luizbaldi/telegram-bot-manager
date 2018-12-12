import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

/* Styles */
import 'sweetalert2/dist/sweetalert2.css'

import DashboardScreen from './screens/DashboardScreen'
import LoginScreen from './screens/LoginScreen'

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    font-family: monospace;
  }
`

const App = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={LoginScreen} />
      <Route path="/dashboard" component={DashboardScreen} />
    </Switch>
    <GlobalStyle />
  </Fragment>
)

export default App
