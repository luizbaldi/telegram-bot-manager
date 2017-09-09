import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class Login extends Component {
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
					<button onClick={this.doLogin}>Login</button>
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

export default Login;