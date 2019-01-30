import React from 'react';
import '../../../node_modules/bulma/bulma.sass';
import LoginForm from './LoginForm.jsx';

const LoginPage = () => {
	return (
		<div className="LoginPage">
			Log In Below
			<LoginForm />
		</div>
	);
};

export default LoginPage;
