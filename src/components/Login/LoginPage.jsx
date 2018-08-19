import React from 'react';
import '../../../node_modules/bulma/bulma.sass';
import LoginForm from './LoginForm.jsx';

const LoginPage = () => {
	return <div id="LoginPage">Sign In with Google
		<br />
		<LoginForm />
	</div>;
};

export default LoginPage;
