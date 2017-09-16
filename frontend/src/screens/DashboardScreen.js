import React, { Component } from 'react';
import Header from '../components/Header';
import ListChats from '../components/ListChats';
import CurrentChat from '../components/CurrentChat';
import DashboardWebSocket from '../components/DashboardWebSocket';

class DashboardScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			chats: [],
			selectedChat: false,
			messageToSent: false
		};

		this.sendMessage = this.sendMessage.bind(this);
		this.handleReceivedMessage = this.handleReceivedMessage.bind(this);
		this.selectChat = this.selectChat.bind(this);
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
			selectedChat: this.state.selectedChat,
			messageToSent: false
		});
	}
	sendMessage(message) {
		let chats = this.state.chats;
		let currentUserId = this.state.selectedChat.userId;

		let currentChat = chats.filter(chat => chat.userId === currentUserId).shift();
		// Saves message history
		currentChat.messages.push({
			type: 'manager',
			text: message
		});

		let messageToSent = {
			userId: currentUserId,
			message: message
		};

		this.setState({
			chats: chats,
			selectedChat: this.state.selectedChat,
			messageToSent: JSON.stringify(messageToSent)
		});
	};
	selectChat(selectedChat) {
		this.setState({
			chats: this.state.chats,
			selectedChat: selectedChat,
			messageToSent: false
		});
	}
	render() {
		return (
			<div>
				<Header />
				<DashboardWebSocket
					url="ws://127.0.0.1:3001"
					onMessageReceived={this.handleReceivedMessage}
					message={this.state.messageToSent} />
				<ListChats chats={this.state.chats} onChatClick={this.selectChat} />
				<CurrentChat chat={this.state.selectedChat} onSendMessage={this.sendMessage}/>
			</div>
		)
	}
}

export default DashboardScreen;