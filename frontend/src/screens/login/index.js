import React, { Component } from 'react';
import './style/login.css';

class login extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="login-container vertically-center">
				<div className="panel vertically-center text-center">
					<p>Telegram Bot Manager</p>
					<button>Acesss Via Facebook</button>
				</div>
			</div>
		);
	};
};

export default login;