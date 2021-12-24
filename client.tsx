import React from 'react';
import { render } from 'react-dom';

import App from '@layouts/App';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';

render(
	<Router>
		<App />
	</Router>,
	document.querySelector('#app')
);
