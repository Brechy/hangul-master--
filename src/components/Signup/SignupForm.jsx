import React, {Component} from 'react';
import swal from 'sweetalert';
import {
	Button,
	Form,
	Grid,
	Header,
	Image,
	Message,
	Segment
} from 'semantic-ui-react';

import axios from 'axios';

class SignupForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			passwordAValue: '',
			passwordBValue: '',
		};
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handlePasswordAChange = this.handlePasswordAChange.bind(this);
		this.handlePasswordBChange = this.handlePasswordBChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleUsernameChange(event) {
		this.setState({username: event.target.value});
	}
	handlePasswordAChange(event) {
		this.setState({passwordAValue: event.target.value});
	}
	handlePasswordBChange(event) {
		this.setState({passwordBValue: event.target.value});
	}
	handleSubmit(event) {
		event.preventDefault();
		if(this.state.passwordAValue === this.state.passwordBValue) {
			swal("You are all set!", "You are now registerd, " + this.state.username + "!", "Success");
			axios.post('http://localhost:1337/users', {
				username: this.state.username,
				password: this.state.passwordAValue
			})
		} else {
			swal("Passwords do not match")
		}
	}

	render() {
		return (
			<div id="wrapper" className="login-form">
				<Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
					<Grid.Column style={{ maxWidth: 450 }}>
						<Header as="h2" color="teal" textAlign="center">
							Signing up is simple!
						</Header>
						<Form
							size="large"
						  onSubmit={this.handleSubmit}>
							<Segment stacked>
								<br />
								<Form.Input
									value={this.state.username}
									onChange={this.handleUsernameChange}
									fluid
									icon="user"
									iconPosition="left"
									placeholder="Username"
									type="username"
								/>
								<br />
								<Form.Input
									value={this.state.passwordAValue}
									onChange={this.handlePasswordAChange}
									fluid
									icon="lock"
									iconPosition="left"
									placeholder="Password"
									autoComplete="new-password"
									type="password"
								/>
								<br />
								<Form.Input
									value={this.state.passwordBValue}
									onChange={this.handlePasswordBChange}
									fluid
									icon="lock"
									iconPosition="left"
									placeholder="Confirm Password"
									autoComplete="new-password"
									type="password"
								/>
								<br />
								<Button
									color="teal"
									fluid size="large"
									type="submit"
									value="Submit"
								>
									Signup
								</Button>
							</Segment>
						</Form>
					</Grid.Column>
				</Grid>
			</div>
		)
	}
}

export default SignupForm;
