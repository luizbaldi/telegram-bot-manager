import React, { Component } from 'react';
import { Col, Panel } from 'react-bootstrap';

class ListChats extends Component {
	constructor(props) {
		super(props);

		this.convertDate = this.convertDate.bind(this);
	}
	convertDate(unixDateValue) {
		let date = new Date(unixDateValue * 1000);
		return date.getHours() + ':' + date.getMinutes();
	}
	render() {
		return (
			<Col xs={3} style={style.container}>
				<div style={style.listChats}>
					{ this.props.chats.length > 0
						? this.props.chats.map((chat, index) => {
							return (
								<Col xs={12} key={'chatRow_' + index}>
									<Panel header={chat.user.first_name} onClick={() => this.props.onChatClick(chat)}>
										<i>Last Update: {this.convertDate(chat.lastUpdate)}</i>
									</Panel>
								</Col>
							);
						})
						: <Col xs={12}>
							<h5>No chats yet</h5>
						</Col>
					}
				</div>
			</Col>
		)
	}
};

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

export default ListChats;