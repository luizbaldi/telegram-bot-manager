import React from 'react';
import { Col, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
	let headerStyle =  {
		height: '70px',
		'backgroundColor': '#30b6f8'
	};

	let logoutButtonStyle = {
		margin: '15px',
		float: 'right'
	};

	return (
		<Row>
			<Col xs={12}>
				<header style={headerStyle}>
					<Link to='/'>
						<Button style={logoutButtonStyle}>Logout</Button>
					</Link>
				</header>
			</Col>
		</Row>
	)
}

export default Header;