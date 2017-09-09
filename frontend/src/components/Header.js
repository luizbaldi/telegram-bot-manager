import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = ({onSendMessage}) => {
	return (
		<Col xs={12}>
			<header style={style.header}>
				<Link to='/'>
					<Button style={style.logoutButtonStyle}>Logout</Button>
				</Link>
			</header>
		</Col>
	)
};

const style = {
	header: {
		height: '10vh',
		backgroundColor: '#30b6f8'
	},
	logoutButtonStyle: {
		margin: '15px',
		float: 'right'
	}
}

export default Header;