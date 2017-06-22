import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class ListChats extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Col xs={3}>
				<div className="list-chats">
					<p>No chats yet</p>
				</div>
			</Col>
		)
	}
}

export default ListChats;