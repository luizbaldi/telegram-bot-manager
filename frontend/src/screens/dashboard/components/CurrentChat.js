import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class CurrentChat extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<Col xs={9}>
				<div className="current-chat">
					<p>No messages found</p>
				</div>
			</Col>
		);
	}
};

export default CurrentChat;