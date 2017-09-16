import React, { Component } from 'react';
import DashboardScreen from './DashboardScreen';
import LoginScreen from './LoginScreen';
import { Route, Switch } from 'react-router-dom';

/*
* Styles
*/
import 'css-reset/reset.css';
import 'sweetalert2/dist/sweetalert2.css';
import './app.css';

class App extends Component {
    render() {
        return (
			<Switch>
				<Route exact path='/' component={LoginScreen} />
				<Route path='/dashboard' component={DashboardScreen} />
			</Switch>
        );
    }
}

export default App;
