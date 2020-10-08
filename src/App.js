import React from 'react';
import './App.css';
import About from './components/Pages/About';
import Education from './components/Pages/Education';
import Picture from './components/Pages/Picture';
import Skills from './components/Pages/Skills';
import Resume from './components/Pages/Resume';
import ContactMe from './components/Pages/ContactMe';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
	return (
		<div>
			<Sidebar />
			<Picture />
			<About />
			<Education />
			<Skills />
			<Resume />
			<ContactMe />
		</div>
	);
};

export default App;
