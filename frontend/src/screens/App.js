import React, { Component } from 'react';
import Dashboard from './dashboard/Dashboard';
import Login from './login/Login';
import { Route, Switch } from 'react-router-dom';
import './app.css';

class App extends Component {
    render() {
        return (
			<Switch>
				<Route exact path='/' component={Login} />
				<Route path='/dashboard' component={Dashboard} />
			</Switch>
        );
    }
}

export default App;
