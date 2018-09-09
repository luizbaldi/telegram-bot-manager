import React, { Component } from 'react'
import styled from 'styled-components'

class ListChats extends Component {
  convertDate = (unixDateValue) => {
    const date = new Date(unixDateValue * 1000)
    return `${date.getHours()}:${date.getMinutes()}`
  }

  render() {
    return (
      <Container>
        {this.props.chats.length > 0
          ? this.props.chats.map(chat => (
            <ChatBox
              key={`chatRow_${chat.lastUpdate}`}
              onClick={() => this.props.onChatClick(chat)}
            >
              <div>{chat.user.first_name}</div>
              <div>{chat.messages[chat.messages.length - 1].text}</div>
              <div>Last Message: {this.convertDate(chat.lastUpdate)}</div>
            </ChatBox>
          ))
          : <NoChatTitle>No chats yet</NoChatTitle>
        }
      </Container>
    )
  }
}

/* Styled components */
const Container = styled.div`
  overflow: hidden;
  height: 90vh;
  overflow-y: auto;
  text-align: center;
  width: 20%;
  display: inline-block;
`

const NoChatTitle = styled.h5`
  text-align: center;
`

const ChatBox = styled.div`
  padding: 12px 0px;
  border-bottom: 1px solid grey;
  transition: background-color .2s ease-in;

  &:hover {
    cursor: pointer;
    background-color: papayawhip;
  }
`

export default ListChats
