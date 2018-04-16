import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './screens/App.jsx';

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
)
