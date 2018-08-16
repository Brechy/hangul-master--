import React, { Component } from 'react';
import './sass/main.scss';
import CardForm from './components/CardComponents/CardForm.jsx';
import NavBar from './components/NavBar/Nav_Bar.jsx';
import FlashCard from './components/CardComponents/FlashCard.jsx';

const App = () => {
	const styles = {
		card: {
			border: '.5px solid black',
			borderRadius: '3px',
			padding: '15px',
			width: '250px'
		},
		image: {
			height: '200px',
			width: '250px'
		}
	};
	return (
		<div className="App">
			<NavBar />
			<CardForm />
			<FlashCard styles={styles} />
		</div>
	);
};

export default App;
