import React from 'react';
import { Route } from 'react-router-dom';

import Nav from './components/Navbar';
import Default from './components/Default';
import Footer from './components/Footer';

function App() {
	return (
		<div>
			<Nav />
			<Route exact path='/' component={Default} />
			<Footer />
		</div>
	);
}

export default App;