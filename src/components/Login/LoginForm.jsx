import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
	console.log(response);
};

const LoginForm = () => {
	return (
		<GoogleLogin
			clientId="985262096986-ebd9c6615ps9map91sc7gmjhrenuf1t1.apps.googleusercontent.com"
			buttonText="Sign in"
			onSuccess={responseGoogle}
			onFailure={responseGoogle}
		/>
	);
};

export default LoginForm;
