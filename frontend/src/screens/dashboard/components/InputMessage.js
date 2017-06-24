import React, { Component } from 'react';
import { FormGroup, FormControl, Col, Button } from 'react-bootstrap';

class InputMessage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: ''
		};

		this.handleTextChange = this.handleTextChange.bind(this);
		this.sendMessage = this.sendMessage.bind(this);
		this.preventPageReload = this.preventPageReload.bind(this);
	}
	handleTextChange(event) {
		this.setState({
			message: event.target.value
		});
	}
	sendMessage(message) {
		this.props.onSendMessage(this.state.message);

		this.setState({
			message: ''
		});
	}
	preventPageReload(event) {
		event.preventDefault();
	}
	render() {
		return (
			<form onSubmit={this.preventPageReload}>
				<FormGroup>
					<Col xs={10}>
			      		<FormControl
			      			type="text"
			      			placeholder="Type your message here"
			      			disabled={this.props.hasToDisable}
			      			onChange={this.handleTextChange}
			      			value={this.state.message} />
					</Col>
					<Col xs={2}>
						<Button
							type="submit" block
							bsStyle={this.props.hasToDisable ? "default" : "primary"}
							disabled={this.props.hasToDisable}
							onClick={() => this.sendMessage(this.state.message)}>
								Send
							</Button>
					</Col>
			    </FormGroup>
		    </form>
		);
	}
}

export default InputMessage;