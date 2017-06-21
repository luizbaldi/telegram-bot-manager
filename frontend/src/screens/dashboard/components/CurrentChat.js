import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class CurrentChat extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let currentChatStyle = {
			'backgroundColor': '#e0e0e0'
		};

		return(
			<Col xs={9} style={currentChatStyle}>
				<p>No messages found</p>
			</Col>
		);
	}
};

export default CurrentChat;