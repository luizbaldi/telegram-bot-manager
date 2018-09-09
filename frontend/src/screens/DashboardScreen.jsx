import React, { Component } from 'react'
import Header from '../components/Header'
import ListChats from '../components/ListChats'
import CurrentChat from '../components/CurrentChat'
import DashboardWebSocket from '../components/DashboardWebSocket'

class DashboardScreen extends Component {
  state = {
    chats: [],
    selectedChat: false,
    messageToSent: false,
    isBotOnline: true
  }

  handleReceivedMessage = (messageData) => {
    const { chats } = this.state
    const userExists = this.state.chats.some(chat => chat.userId === messageData.user.id)

    if (userExists) {
      const currentChat = chats.filter(chat => chat.userId === messageData.user.id).shift()
      currentChat.lastUpdate = messageData.date
      currentChat.messages.push({
        type: 'user',
        text: messageData.message
      })
    } else {
      const currentChat = {
        userId: messageData.user.id,
        messages: [{
          type: 'user',
          text: messageData.message
        }],
        user: messageData.user,
        lastUpdate: messageData.date
      }
      chats.push(currentChat)
    }

    this.setState({
      chats,
      selectedChat: this.state.selectedChat,
      messageToSent: false
    })
  }

  sendMessage = (message) => {
    const { chats } = this.state
    const currentUserId = this.state.selectedChat.userId

    const currentChat = chats.filter(chat => chat.userId === currentUserId).shift()
    // Saves message history
    currentChat.messages.push({
      type: 'manager',
      text: message
    })

    const messageToSent = {
      userId: currentUserId,
      message
    }

    this.setState({
      chats,
      selectedChat: this.state.selectedChat,
      messageToSent: JSON.stringify(messageToSent)
    })
  }

  selectChat = (selectedChat) => {
    this.setState({
      chats: this.state.chats,
      selectedChat,
      messageToSent: false
    })
  }

  updateBotStatus = (status) => {
    this.setState({
      isBotOnline: status
    })
  }

  render() {
    return (
      <div>
        <Header isBotOnline={this.state.isBotOnline} />
        <DashboardWebSocket
          url="ws://127.0.0.1:3001"
          onMessageReceived={this.handleReceivedMessage}
          message={this.state.messageToSent}
          updateBotStatus={this.updateBotStatus}
        />
        <ListChats chats={this.state.chats} onChatClick={this.selectChat} />
        <CurrentChat chat={this.state.selectedChat} onSendMessage={this.sendMessage} />
      </div>
    )
  }
}

export default DashboardScreen
