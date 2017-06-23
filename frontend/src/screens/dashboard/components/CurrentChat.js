import React, { Component } from 'react';
import { Col, Panel, Well, Row } from 'react-bootstrap';
import InputMessage from './InputMessage';

class CurrentChat extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<Col xs={9} className="parent-dashboard">
				<div className="current-chat">
					{ this.props.chat ?
						this.props.chat.messages.map((message, index) => {
							return (
								<div key={"panelMessage_" + index}>
									{ message.type === 'user' ?
										<Col xs={4} xsOffset={8}>
											<Well className="pull-right">{message.text}</Well>
										</Col>
										: <Col xs={4} >
											<Well className="pull-left">{message.text}</Well>
										</Col>
									}
								</div>
							);
						})
						: 	<Col xs={12} className="text-center">
								<h3>Select a chat to procced :)</h3>
							</Col>
					}
				</div>
				<div>
				<InputMessage hasToDisable={!this.props.chat} onSendMessage={this.props.onSendMessage}/>
				</div>
			</Col>
		);
	}
};

export default CurrentChat;