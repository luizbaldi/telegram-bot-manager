import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap';

class LoginScreen extends Component {
	constructor(props) {
		super(props);

		this.doLogin = this.doLogin.bind(this);
	}
	doLogin(response) {
		this.props.history.push('/dashboard');
	}
	render() {
		return (
			<div style={style.loginContainer}>
				<Panel style={style.panel}>
					<h4>Telegram Bot Manager</h4>
					<hr />
					{/* <button >Login</button> */}
					<Button onClick={this.doLogin} bsStyle="primary" block>Login</Button>
				</Panel>
			</div>
		);
	};
};

const style = {
	loginContainer: {
		backgroundColor: '#30b6f8',
		height: '100vh',
		width: '100%',
		textAlign: 'center'
	},
	panel: {
		width: '30%',
		height: '20vh',
		display: 'inline-block',
		textAlign: 'center',
		position: 'relative',
		top: '50%',
		transform: 'translateY(-50%)'
	}
}

export default LoginScreen;