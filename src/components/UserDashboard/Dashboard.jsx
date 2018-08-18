import React, { Component } from 'react';
import CardForm from '../CardComponents/CardForm.jsx';
import FlashCard from '../CardComponents/FlashCard.jsx';
import '../../../node_modules/bulma/bulma.sass';

const Dashboard = () => {
	const styles = {
		card: {
			border: '1px solid black',
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
		<div id="wrapper">
			<div className="tile is-ancestor">
				<div className="tile is-vertical is-8">
					<div className="tile">
						<div className="tile is-parent is-vertical">
							<article className="tile is-child notification is-primary">
								<p className="title">Create Flashcard</p>
								<p className="subtitle">Translate and Create Here!</p>
								<CardForm />
							</article>
						</div>
						<div className="tile is-parent">
							<article className="tile is-child notification is-info">
								<p className="title">Middle tile</p>
								<iframe
									width="375"
									height="300"
									src="https://www.youtube.com/embed/U7l5tjBbSx4"
									frameBorder="0"
									allow="autoplay; encrypted-media"
									allowFullScreen
        />
							</article>
						</div>
					</div>
					<div className="tile is-parent">
						<article className="tile is-child notification is-danger">
							<p className="title">Wide tile</p>
							<p className="subtitle">Aligned with the right tile</p>
							<div className="content" />
						</article>
					</div>
				</div>
				<div className="tile is-parent">
					<article className="tile is-child notification is-success">
						<div className="content">
							<p className="title">Cards and Decks</p>
							<p className="subtitle">Access your Cards and Decks here!</p>
							<div className="content">
								<FlashCard styles={styles} />
							</div>
						</div>
					</article>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
