import React from 'react';
import './App.css';
import About from './components/Pages/About';
import Education from './components/Pages/education/Education';
import Picture from './components/Pages/Picture';
import Skills from './components/Pages/skills/Skills';
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
			<ContactMe />
		</div>
	);
};

export default App;
