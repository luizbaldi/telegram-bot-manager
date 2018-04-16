/* global WebSocket */
import React, { Component } from 'react'
import swal from 'sweetalert2'

class DashboardWebSocket extends Component {
  constructor(props) {
    super(props)

    this.sendMessage = this.sendMessage.bind(this)
    this.onWebsocketError = this.onWebsocketError.bind(this)
  }

  componentDidMount() {
    const websocket = new WebSocket(this.props.url)
    const { onMessageReceived } = this.props

    websocket.onerror = this.onWebsocketError

    websocket.onmessage = (message) => {
      const messageData = JSON.parse(message.data).data
      onMessageReceived(messageData)
    }

    this.websocket = websocket
  }
  componentWillUnmount() {
    this.websocket.close()
  }

  onWebsocketError() {
    swal(
      'Ops...',
      'Couldn\'t connect to socket, check your project settings.',
      'error'
    )
    this.props.updateBotStatus(false)
  }

  sendMessage() {
    let { message } = this.props
    if (message) {
      this.websocket.send(message)
      message = false
    }
  }

  render() {
    return (
      <div>
        {this.sendMessage()}
      </div>
    )
  }
}

export default DashboardWebSocket
