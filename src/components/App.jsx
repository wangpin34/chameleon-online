import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import Header from './Header.jsx'
import EditPanel from './EditPanel.jsx'
import PreviewPanel from './PreviewPanel.jsx'

class App extends Component {

	render() {
		return (
			<div>
				<Header />
				<EditPanel />
				<PreviewPanel />
			</div>
		)
	}
}

export default App