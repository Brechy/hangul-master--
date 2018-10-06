import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import validator from 'validator';


const onFailure = (response) => {
	console.log(response);
}

const onSuccess = (response) => {
//
	localStorage.setItem('jwt token', response.tokenId)
	window.location = '/Dashboard';
}

//validate stuff and things!
//does the username exists in the database
//no = error
//is the password correct
//no = error


const LoginForm = () => {
	return (

  <Form id="loginform">
    <Form.Field className="formitem">
      <label>Username</label>
      <input placeholder='Username' />
		</Form.Field>
		<Form.Field className="formitem">
      <label>Password</label>
      <input placeholder='Password' />
    </Form.Field>
    <Button type='submit' id="submit">Submit</Button>

		<div className="googlebutton">
			<h1>OR</h1>
			<h1>Login With Google</h1>
			<br></br>
			<GoogleLogin
				clientId="985262096986-ebd9c6615ps9map91sc7gmjhrenuf1t1.apps.googleusercontent.com"
				buttonText="Sign in"
				onSuccess={onSuccess}
				onFailure={onFailure}
			/>
		</div>
  </Form>
	);
};

export default LoginForm;
