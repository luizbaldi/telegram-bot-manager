import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login';
import './style/login.css';

class Login extends Component {
	constructor(props) {
		super(props);

		this.responseFacebook = this.responseFacebook.bind(this);
	}
	responseFacebook(response) {
		console.log('Facebook login here');
		this.props.history.push('/dashboard');
	}
	render() {
		return (
			<div className="login-container text-center">
				<Panel className="vertically-center text-center">
					<h4>Telegram Bot Manager</h4>
					<hr />
					<FacebookLogin
				        appId="1504945156236072"
				        autoLoad={true}
				        fields="name,email,picture"
				        callback={this.responseFacebook} />
				</Panel>
			</div>
		);
	};
};

export default Login;