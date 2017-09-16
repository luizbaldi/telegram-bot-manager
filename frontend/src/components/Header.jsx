import React from 'react';
import { Col, Button, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const getBotStatusComponent = (isBotOnline) => {
	let componentStyle, text;
	if (isBotOnline) {
		text = 'Online';	
		componentStyle = style.onlineLabel;
	} else {
		text = 'Offline';
		componentStyle = style.offlineLabel;
	}
	return <span style={componentStyle}>{`${text}`}</span>
};

const Header = ({isBotOnline}) => {
	return (
		<Col xs={12}>
			<header style={style.header}>
				<Tooltip placement="right" className="in" id="tooltip-right" style={style.statusMessage}>
					Status do bot: {getBotStatusComponent(isBotOnline)}
				</Tooltip>
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
	},
	statusMessage: {
		display: 'inline-block',
		marginTop: '18px',
		color: '#fafafa',
		fontSize: '1em',
	},
	onlineLabel: {
		fontWeight: 600,
		color: '#00f542'
	},
	offlineLabel: {
		fontWeight: 600,
		color: '#ff3e3e'
	}
}

export default Header;