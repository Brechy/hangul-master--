import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCardFlip from 'react-card-flip';
import './card.sass';

class FlashCard extends Component {
	constructor() {
		super();
		this.state = {
			isFlipped: false
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event) {
		event.preventDefault();
		this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
	}
	render() {
		return (
			<ReactCardFlip isFlipped={this.state.isFlipped}>
				<div className="front card" key="front">
					<h6>{this.props.english}</h6>
					<button className="button" onClick={this.handleClick}>Flip Card</button>
				</div>
				<div className="back card" key="back">
					<h6>{this.props.hangul}</h6>
					<button className="button" onClick={this.handleClick}>Flip Card</button>
				</div>
			</ReactCardFlip>
		);
	}
}
FlashCard.propTypes = {
	styles: PropTypes.object
};
export default FlashCard;
