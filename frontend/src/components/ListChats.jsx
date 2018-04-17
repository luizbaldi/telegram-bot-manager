import React, { Component } from 'react'
import { Col, Panel } from 'react-bootstrap'
import FullCol from './FullCol.styled.jsx'

class ListChats extends Component {
  convertDate = (unixDateValue) => {
    const date = new Date(unixDateValue * 1000)
    return `${date.getHours()}:${date.getMinutes()}`
  }
  render() {
    return (
      <FullCol xs={3} style={style.container}>
        <div style={style.listChats}>
          {this.props.chats.length > 0
            ? this.props.chats.map(chat => (
              <FullCol xs={12} key={`chatRow_${chat.lastUpdate}`}>
                <Panel onClick={() => this.props.onChatClick(chat)}>
                  <Panel.Heading>{chat.user.first_name}</Panel.Heading>
                  <Panel.Body>{chat.messages[chat.messages.length - 1].text}</Panel.Body>
                  <Panel.Footer>Last Message: {this.convertDate(chat.lastUpdate)}</Panel.Footer>
                </Panel>
              </FullCol>
            ))
            : (
              <Col xs={12}>
                <h5>No chats yet</h5>
              </Col>
            )
          }
        </div>
      </FullCol>
    )
  }
}

const style = {
  container: {
    overflow: 'hidden'
  },
  listChats: {
    height: '90vh',
    overflowY: 'auto',
    textAlign: 'center'
  }
}

export default ListChats
