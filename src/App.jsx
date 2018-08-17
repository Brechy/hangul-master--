import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes.jsx';
import NavBar from './components/NavBar/Nav_Bar.jsx';

const App = () => (
	<BrowserRouter>
		<div>
			<NavBar />
			<Routes />
		</div>
	</BrowserRouter>
);

export default App;
