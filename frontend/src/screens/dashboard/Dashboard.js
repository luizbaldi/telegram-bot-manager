import React, { Component } from 'react';
import Header from './components/Header';
import ListChats from './components/ListChats';
import CurrentChat from './components/CurrentChat';
import './style/dashboard.css';

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			connection: false,
			chats: [],
			selectedChat: false
		};

		this.sendMessage = this.sendMessage.bind(this);
		this.handleReceivedMessage = this.handleReceivedMessage.bind(this);
		this.selectChat = this.selectChat.bind(this);
	}
	componentDidMount() {
		let connection = new WebSocket('ws://127.0.0.1:3001');

		connection.onerror = (error) => {
			alert("Error: Couldn't connect to socket.");
			this.props.history.push('/');
		};

		connection.onmessage = (message) => {
			message = JSON.parse(message.data);
			this.handleReceivedMessage(message.data);
		};

		this.setState({
			connection: connection
		});
	}
	handleReceivedMessage(messageData) {
		let chats = this.state.chats;
		let userExists = this.state.chats.some(chat => {
			return chat.userId === messageData.user.id;
		});

		if (userExists) {
			let currentChat = chats.filter(chat => chat.userId === messageData.user.id).shift();
			currentChat.lastUpdate = messageData.date;
			currentChat.messages.push({
				type: 'user',
				text: messageData.message
			});
		} else {
			let currentChat = {
				userId: messageData.user.id,
				messages: [{
					type: 'user',
					text: messageData.message
				}],
				user: messageData.user,
				lastUpdate: messageData.date
			};
			chats.push(currentChat);
		}

		this.setState({
			chats: chats,
			connection: this.state.connection,
			selectedChat: this.selectedChat
		});
	}
	sendMessage(message) {
		let connection = this.state.connection;
		let chats = this.state.chats;
		let currentUserId = this.state.selectedChat.userId;

		let currentChat = chats.filter(chat => chat.userId === currentUserId).shift();
		currentChat.messages.push({
			type: 'manager',
			text: message
		});

		this.setState({
			chats: chats,
			connection: this.state.connection,
			selectedChat: this.state.selectedChat
		});

		connection.send(message);
	};
	selectChat(selectedChat) {
		this.setState({
			chats: this.state.chats,
			selectedChat: selectedChat,
			connection: this.state.connection
		});
	}
	render() {
		return (
			<div>
				<Header />
				<ListChats chats={this.state.chats} onChatClick={this.selectChat} />
				<CurrentChat chat={this.state.selectedChat} onSendMessage={this.sendMessage}/>
			</div>
		)
	}
}

export default Dashboard;