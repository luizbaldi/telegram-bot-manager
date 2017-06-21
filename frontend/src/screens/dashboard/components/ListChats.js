import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class ListChats extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Col xs={3}>
				<p>No chats yet</p>
			</Col>
		)
	}
}

export default ListChats;