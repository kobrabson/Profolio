import React from 'react';
import './App.css';
import About from './components/Pages/About';
import Education from './components/Pages/Education';
import Picture from './components/Pages/Picture';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
	return (
		<div>
			<Sidebar />
			<Picture />
			<About />
			<Education />
		</div>
	);
};

export default App;
