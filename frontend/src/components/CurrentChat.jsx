import React from 'react'
import styled from 'styled-components'
import { Col, Well, Row } from 'react-bootstrap'
import InputMessage from './InputMessage'
import FullCol from './FullCol.styled.jsx'

const CurrentChat = ({ chat, onSendMessage }) => (
  <Container xs={9}>
    <ChatContainer>
      {chat ?
        chat.messages.map(message => (
          <div key={`panelMessage_${message.text.substr(0, 3)}`}>
            {message.type === 'user' ?
              <Row>
                <Col xs={4} xsOffset={8}>
                  <UserMessage className="pull-right">{message.text}</UserMessage>
                </Col>
              </Row>
              : (
                <Row>
                  <Col xs={4}>
                    <ManagerMessage className="pull-left">{message.text}</ManagerMessage>
                  </Col>
                </Row>
              )
            }
          </div>
        ))
        : (
          <Col xs={12} className="text-center">
            <h3>Select a chat to procced :)</h3>
          </Col>
        )
      }
    </ChatContainer>
    <div>
      <InputMessage hasToDisable={!chat} onSendMessage={onSendMessage} />
    </div>
  </Container>
)

const Container = styled(FullCol)`
  overflow: hidden;
`

const ChatContainer = styled.div`
  padding: 15px 20px;
  height: 80vh;
  background-color: #e0e0e0;
  overflow-y: auto;
`

const UserMessage = styled(Well)`
  border: 1px solid #a7a7a7;
`

const ManagerMessage = styled(Well)`
  border: 1px solid #7bad7b;
  background-color: #cbffcb;
`

export default CurrentChat
