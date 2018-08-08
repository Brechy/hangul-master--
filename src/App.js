import React, { Component } from 'react';
import './sass/main.scss';
import CardForm from './components/CardComponents/card_form.jsx';
class App extends Component {
	render() {
		return (
			<div className="App">
				<CardForm />
			</div>
		);
	}
}

export default App;
