import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import App from './App.jsx'

/* Global style */
injectGlobal([`
	body {
		margin: 0;
		font-family: monospace;
	}
`])

ReactDOM.render(
	<Router>
		<App />
	</Router>,
  document.getElementById('root')
)
