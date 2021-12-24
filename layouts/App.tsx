import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';

import LogIn from '@pages/LogIn';
import SignUp from '@pages/SignUp';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<LogIn />} />
			<Route path="/login" element={<LogIn />} />
			<Route path="/signup" element={<SignUp />} />
		</Routes>
	);
};

export default App;
