import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LandingPage from './src/components/LandingPage/LandingPage.jsx';
import LoginPage from './src/components/Login/LoginPage.jsx';
import DashboardPage from './src/components/UserDashboard/DashboardPage.jsx';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={LandingPage} />
		<Route path="/LoginPage" component={LoginPage} />
		<Route path="/DashboardPage" component={DashboardPage} />
		<Route path="*" render={() => <Redirect to="/" />} />
	</Switch>
);

export default Routes;
