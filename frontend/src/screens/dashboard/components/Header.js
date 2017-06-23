import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = ({onSendMessage}) => {
	let logoutButtonStyle = {
		margin: '15px',
		float: 'right'
	};

	return (
		<Col xs={12}>
			<header>
				<Link to='/'>
					<Button style={logoutButtonStyle}>Logout</Button>
				</Link>
			</header>
		</Col>
	)
}

export default Header;