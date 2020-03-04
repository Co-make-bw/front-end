import React from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DefaultContent from './components/DefaultContent';

function App() {
	return (
		<div>
			<Navbar />
			<DefaultContent />
			<Footer />
		</div>
	);
}

export default App;