import React, { Component } from 'react';
import Header from './components/Header';
import ListChats from './components/ListChats';
import CurrentChat from './components/CurrentChat';
import { Row, Col } from 'react-bootstrap';
import './style/dashboard.css';

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			connection: false
		}

		this.sendRandomMessage = this.sendRandomMessage.bind(this);
	}
	componentDidMount() {
		let connection = new WebSocket('ws://127.0.0.1:3001');

		connection.onopen = () => {
			console.log('opened connection');
		};

		connection.onerror = (error) => {
			console.log('Error opening websocket.');
			console.log(error);
		};

		connection.onmessage = (message) => {
			console.log('Message received!');
			console.log(message);
			message = JSON.parse(message.data);

			if (message.type == 'history') {
				console.log('History message type');
			} else if (message.type == 'message') {
				console.log('Message type');
			}
		};

		this.setState({
			connection: connection
		});
	}
	sendRandomMessage() {
		console.log('Sending a message to bot...');
		let connection = this.state.connection;
		connection.send('Hello dear, message sent from Telegram Bot Manager :)');
	};
	render() {
		return (
			<div>
				<Header onSendMessage={this.sendRandomMessage} />
				<ListChats />
				<CurrentChat />
			</div>
		)
	}
}

export default Dashboard;