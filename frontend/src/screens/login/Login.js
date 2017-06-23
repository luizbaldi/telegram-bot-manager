import React, { Component } from 'react';
import { Button, Panel } from 'react-bootstrap';
import './style/login.css';

class Login extends Component {
	constructor(props) {
		super(props);

		this.doFacebookLogin = this.doFacebookLogin.bind(this);
	}
	doFacebookLogin() {
		console.log('Facebook login here');
		this.props.history.push('/dashboard');
	}
	render() {
		return (
			<div className="login-container text-center">
				<Panel className="vertically-center text-center">
					<h4>Telegram Bot Manager</h4>
					<hr />
					<Button bsSize="large" bsStyle="primary" onClick={this.doFacebookLogin}>
						Acesss Via Facebook
					</Button>
				</Panel>
			</div>
		);
	};
};

export default Login;