import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import {Redirect} from 'react-router';
import CardForm from '../CardComponents/CardForm.jsx';
import FlashCard from '../CardComponents/FlashCard.jsx';
import '../../../node_modules/bulma/bulma.sass';
import isAuthenticated from '../../lib/auth.js';

import axios from 'axios';

class Dashboard extends Component {
	state = {auth: undefined, cardFlipped: false}

  flipCard() {
	  this.setState({cardFlipped: !this.state.cardFlipped})
	}

	changeCard() {
		this.setState({ cardChanging: true, cardFlipped: false });

		function random_item(items) {
			return items[Math.floor(Math.random()*items.length)];
     }

		axios.get('/api/cards')
			.then((res) => {
				console.log(res)
				let oldenglish = this.state.cardEnglish;
				let card = random_item(res.data.data)
				while (true) {
					if (res.data.data.length < 2 || card.english != oldenglish) {
						break
					}
					card = random_item(res.data.data)
				}
				this.setState({ cardChanging: false, cardEnglish:card.english, cardHangul:card.hangul });
			});
	}
	render() {
		if (this.state.auth === undefined) { isAuthenticated()
		.then((yes) => {
			this.setState({
				auth: yes
			})
		})}
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
		const redirect = (<div>Redirecting<Redirect to="/Login" /></div>);
		const authSpinner = (<div>Authenticating</div>);
		const authBody = (
			<div className="wrapper">
				<div className="tile is-ancestor">
					<div className="tile is-vertical is-8">
						<div className="tile greenblue">
							<div className="tile is-parent is-vertical">
								<article className="tile is-child notification is-primary">
									<p className="title">Create Flashcard</p>
									<p className="subtitle">Translate and Create Here!</p>
									<CardForm />
								</article>
							</div>
							<div className="tile is-parent">
								<article className="tile is-child notification is-info">
									<p className="title">Pronunciation</p>
									<p className="subtitle">Check out these YouTube videos from Talk To Me In Korean, to pronounce Korean words and phrases like a pro!</p>
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
								<p className="title">Friends</p>
								<p className="subtitle">Share your language learning journey with friends.</p>
								<div className="content" />
							</article>
						</div>
					</div>
					<div className="tile is-parent">
						<article className="tile is-child notification is-success">
							<div className="content">
								<p className="title">Cards</p>
								<p className="subtitle">Access your Cards here!</p>
								<div className="content">
									<FlashCard styles={styles} flipCard={this.flipCard} isFlipped={this.state.cardFlipped} hangul={this.state.cardHangul} english={this.state.cardEnglish} />
								</div>
								<div>
									<Button onClick={(event) => this.changeCard()}  loading={this.state.cardChanging} className="nextcard">Next</Button>
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>
		);
				if(this.state.auth === undefined) {
					return authSpinner
				}
				if(this.state.auth === false) {
					return redirect;
				}
				return authBody;
	}
}

export default Dashboard;
