import React from 'react'
import styled from 'styled-components'
import InputMessage from './InputMessage'

const CurrentChat = ({ chat, onSendMessage }) => (
  <Container>
    <ChatContainer>
      {chat ?
        chat.messages.map(message => (
          <div key={`panelMessage_${message.text.substr(0, 3)}`}>
            {message.type === 'user'
              ? <UserMessage>{message.text}</UserMessage>
              : <ManagerMessage>{message.text}</ManagerMessage>
            }
          </div>
        ))
        : <NoChatTitle>Select a chat to procced :)</NoChatTitle>
      }
    </ChatContainer>
    <div>
      <InputMessage hasToDisable={!chat} onSendMessage={onSendMessage} />
    </div>
  </Container>
)

const Container = styled.div`
  overflow: hidden;
  width: 80%;
  display: inline-block;
  height: 90vh;
`

const ChatContainer = styled.div`
  padding: 15px 20px;
  height: 80vh;
  background-color: #e0e0e0;
  overflow-y: auto;
`

const UserMessage = styled.div`
  border: 1px solid #a7a7a7;
  width: 30%;
  padding: 12px;
  border-radius: 4px;
  background-color: #fafafa;
`

const ManagerMessage = styled.div`
  border: 1px solid #7bad7b;
  background-color: #cbffcb;
  width: 30%;
  padding: 12px;
  border-radius: 4px;
  float: right;
`

const NoChatTitle = styled.h3`
  text-align: center;
`

export default CurrentChat
