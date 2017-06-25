import React, { Component } from 'react';
import { Col, Well, Row } from 'react-bootstrap';
import InputMessage from './InputMessage';

class CurrentChat extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let userMessageStyle = {
		    border: '1px solid #a7a7a7'
		};

		let managerMessageStyle = {
		    border: '1px solid #7bad7b',
    		backgroundColor: '#cbffcb'
		};
		let chatContainer = {
			padding: '15px 20px'
		};
		return(
			<Col xs={9} className="parent-dashboard">
				<div className="current-chat" style={chatContainer}>
					{ this.props.chat ?
						this.props.chat.messages.map((message, index) => {
							return (
								<div key={"panelMessage_" + index}>
									{ message.type === 'user' ?
										<Row>
											<Col xs={4} xsOffset={8}>
												<Well className="pull-right" style={userMessageStyle}>{message.text}</Well>
											</Col>
										</Row>
										: <Row>
											<Col xs={4}>
												<Well className="pull-left" style={managerMessageStyle}>{message.text}</Well>
											</Col>
										</Row>
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