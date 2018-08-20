import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';

const onFailure = (response) => {
	console.log(response);
}

const onSuccess = (response) => {
//
	localStorage.setItem('jwt token', response.tokenId)
	window.location = '/Dashboard';
}

const LoginForm = () => {
	return (
		<GoogleLogin
			clientId="985262096986-ebd9c6615ps9map91sc7gmjhrenuf1t1.apps.googleusercontent.com"
			buttonText="Sign in"
			onSuccess={onSuccess}
			onFailure={onFailure}
		/>
	);
};

export default LoginForm;
