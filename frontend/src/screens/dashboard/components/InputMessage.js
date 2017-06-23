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
	render() {
		return (
			<form>
				<FormGroup>
						<Col xs={10}>
				      		<FormControl
				      			type="text"
				      			placeholder="Normal text"
				      			disabled={this.props.hasToDisable}
				      			onChange={this.handleTextChange} />
						</Col>
						<Col xs={2}>
							<Button type="button" block disabled={this.props.hasToDisable} onClick={() => this.sendMessage(this.state.message)}>Send</Button>
						</Col>
			    </FormGroup>
			</form>
		);
	}
}

export default InputMessage;