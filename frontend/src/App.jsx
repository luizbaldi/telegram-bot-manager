import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

/* Styles */
import 'sweetalert2/dist/sweetalert2.css'

import DashboardScreen from './screens/DashboardScreen'
import LoginScreen from './screens/LoginScreen'

injectGlobal([`
  html, body {
    height: 100%;
  }
`])

const App = () => (
  <Switch>
    <Route exact path="/" component={LoginScreen} />
    <Route path="/dashboard" component={DashboardScreen} />
  </Switch>
)

export default App
