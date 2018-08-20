import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import FlashCard from './FlashCard.jsx';
import '../../../node_modules/bulma/bulma.sass';

import axios from 'axios';

class CardForm extends Component {
	constructor(props) {
		super(props);
		this.state = { value: '', hangul:'', english:'' };
	}

	handleSave(event) {
		console.log('A Card was saved!');
		this.setState({ isSaving: true })
		axios.post('http://localhost:1337/cards', {
			english: this.state.english,
			hangul: this.state.hangul,
			score: 1
		})
		.then(() => {
			this.setState({ isSaving: false, hangul:"", value:""})
		})
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
		this.setState({ isTranslating: true, hangul:""});
		axios.get(`http://localhost:1337/cards/translate/${this.state.value}`, {
				card
			})
			.then((res) => {
				this.setState({ isTranslating: false, english:res.data.english, hangul:res.data.hangul });
				console.log(res);
				console.log(res.data);
			});
	}

	render() {
		let flashCard = <div />;
		if (this.state.hangul !== '') {
			flashCard = (
				<div>
					<div>
						<br />
						<FlashCard english={this.state.english} hangul={this.state.hangul}/>
					</div>
					<br />
					<div className="savebutton">
						<Button onClick={(event) => this.handleSave(event)} loading={this.state.isSaving} className="save">Save</Button>
					</div>
				</div>
			);
		}
		return (
			<div>
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
							placeholder="Input english here"
						/>
						<br />
						<br />
						<Button
							id="translate"
							loading={this.state.isTranslating}
							type="submit"
							value="Submit"
						className="button is-warning">
							Translate
						</Button>
					</div>
				</form>
				{flashCard}
			</div>
		);
	}
}

export default CardForm;
