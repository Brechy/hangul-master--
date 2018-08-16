import React, { Component } from 'react';
import './sass/main.scss';
import CardForm from './components/CardComponents/card_form.jsx';
import NavBar from './components/NavBar/Nav_Bar.jsx';
class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<CardForm />
			</div>
		);
	}
}

export default App;
