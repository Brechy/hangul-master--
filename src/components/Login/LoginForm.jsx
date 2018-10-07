import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {GoogleLogin} from 'react-google-login';
import {Button, Checkbox, Form} from 'semantic-ui-react'
import validator from 'validator';

import axios from 'axios';

const onFailure = (response) => {
  console.log(response);
}

const onSuccess = (response) => {
  localStorage.setItem('jwt token', response.tokenId)
  window.location = '/Dashboard';
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleLoginUsername = this.handleLoginUsername.bind(this);
    this.handleLoginPassword = this.handleLoginPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLoginUsername(event) {
    this.setState({username: event.target.value});
  }

  handleLoginPassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
		console.log("submitting login");
		axios.post('http://localhost:1337/login', {
			username: this.state.username,
			password: this.state.password
		})
		.then(res => {
			// set the floopy token, it's not the google one.
			localStorage.setItem('floopy token', res.data.data)
			window.location = '/Dashboard'
		})
  }
  render() {
    return (
			<Form id="loginform">
				<Form.Field
					value={this.state.username}
					onChange={this.handleLoginUsername}
					className="formitem"
				>
					<label>Username</label>
					<input
					placeholder='Username'/>
				</Form.Field>

				<Form.Field
					value={this.state.password}
					onChange={this.handleLoginPassword}
					className="formitem"
				>
					<label>Password</label>
					<input
						type="password"
					placeholder='Password'/>
				</Form.Field>

				<Button
					onClick={this.handleSubmit}
					color="teal"
					fluid size="large"
					type='button'
					value="Submit"
				>
					Submit
				</Button>

				<div className="googlebutton">
					<h1>OR</h1>
					<h1>Login With Google</h1>
					<br></br>
					<GoogleLogin clientId="985262096986-ebd9c6615ps9map91sc7gmjhrenuf1t1.apps.googleusercontent.com" buttonText="Sign in" onSuccess={onSuccess} onFailure={onFailure}/>
				</div>
    </Form>);
  }
};

export default LoginForm;
