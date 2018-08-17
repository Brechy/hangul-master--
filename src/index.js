import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

require('./components/Login/login.sass');
require('./components/LandingPage/landingpage.sass');
require('./components/CardComponents/card.sass');

ReactDOM.render(<App />, document.getElementById('App'));
