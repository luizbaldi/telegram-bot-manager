import React, { Component } from 'react';
import swal from 'sweetalert2';

class DashboardWebSocket extends Component {
	constructor(props) {
		super(props);

		this.state = {
			websocket: new WebSocket(this.props.url)
		};

		this.sendMessage = this.sendMessage.bind(this);
	}
	componentDidMount() {
		let websocket = this.state.websocket;
		let onMessageReceived = this.props.onMessageReceived;

		websocket.onerror = (error) => {
			swal("Error: .");
			swal(
				'Ops...',
				'Couldn\'t connect to socket, check your project settings.',
				'error'
			  )
		};

		websocket.onmessage = (message) => {
			message = JSON.parse(message.data);
			onMessageReceived(message.data);
		};

		this.setState({
			websocket: websocket
		});
	}
	componentWillUnmount() {
		let websocket = this.state.websocket;
		websocket.close();
	}
	sendMessage() {
		let message = this.props.message;
		if (message) {
			this.state.websocket.send(message);
			message = false;
		}
	}
	render() {
		return (
			<div>
				{this.sendMessage()}
			</div>
		);
	}
}

export default DashboardWebSocket;