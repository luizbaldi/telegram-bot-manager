import React from 'react'
import { Route, Switch } from 'react-router-dom'

/*
* Styles
*/
import 'css-reset/reset.css'
import 'sweetalert2/dist/sweetalert2.css'
import './app.css'

import DashboardScreen from './DashboardScreen'
import LoginScreen from './LoginScreen'


const App = () => (
  <Switch>
    <Route exact path="/" component={LoginScreen} />
    <Route path="/dashboard" component={DashboardScreen} />
  </Switch>
)

export default App
