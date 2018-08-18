import React, { Component } from 'react';
import '../../../node_modules/bulma/bulma.sass';

import axios from 'axios';

class CardForm extends Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
		console.log(this.state);
	}

	handleSubmit(event) {
		console.log(`A word or phrase was submitted!: ${this.state.value}`);
		event.preventDefault();

		const card = {
			english: this.state.value
		};
		axios.post('http://localhost:1337/cards', { card }).then((res) => {
			console.log(res);
			console.log(res.data);
		});
	}

	render() {
		return (
			<form
				className="field"
				onSubmit={(event) => {
					this.handleSubmit(event);
				}}>
				<div className="control">
					<input
						value={this.state.value}
						onChange={(event) => this.handleChange(event)}
						className="input is-warning is-large"
						type="text"
						data-parser="uppercase"
						placeholder="English word or phrase"
					/>
					<br />
					<br />
					<button type="submit" value="Submit" className="button is-warning">
						Translate
					</button>
				</div>
			</form>
		);
	}
}

export default CardForm;
