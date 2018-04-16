import React from 'react'
import { Col, Well, Row } from 'react-bootstrap'
import InputMessage from './InputMessage'

const CurrentChat = ({ chat, onSendMessage }) => (
  <Col xs={9} style={style.container}>
    <div style={style.chatContainer}>
      {chat ?
        chat.messages.map(message => (
          <div key={`panelMessage_${message.text.substr(0, 3)}`}>
            {message.type === 'user' ?
              <Row>
                <Col xs={4} xsOffset={8}>
                  <Well className="pull-right" style={style.userMessageStyle}>{message.text}</Well>
                </Col>
              </Row>
              : (
                <Row>
                  <Col xs={4}>
                    <Well className="pull-left" style={style.managerMessageStyle}>{message.text}</Well>
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
    </div>
    <div>
      <InputMessage hasToDisable={!chat} onSendMessage={onSendMessage} />
    </div>
  </Col>
)

const style = {
  container: {
    overflow: 'hidden'
  },
  userMessageStyle: {
    border: '1px solid #a7a7a7'
  },
  managerMessageStyle: {
    border: '1px solid #7bad7b',
    backgroundColor: '#cbffcb'
  },
  chatContainer: {
    padding: '15px 20px',
    height: '80vh',
    backgroundColor: '#e0e0e0',
    overflowY: 'auto'
  }
}

export default CurrentChat
