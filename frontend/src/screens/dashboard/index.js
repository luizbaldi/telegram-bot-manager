import React, { Component } from 'react';
import Header from './components/Header';
import ListChats from './components/ListChats';
import CurrentChat from './components/CurrentChat';

class Dashboard extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Header />
				<ListChats />
				<CurrentChat />
			</div>
		)
	}
}

export default Dashboard;