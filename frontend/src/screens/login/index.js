import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { browserHistory } from 'react-dom';
import './style/login.css';

class login extends Component {
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
			<div className="login-container vertically-center">
				<div className="panel vertically-center text-center">
					<p>Telegram Bot Manager</p>
					<button onClick={this.doFacebookLogin}>Acesss Via Facebook</button>
				</div>
			</div>
		);
	};
};

export default login;