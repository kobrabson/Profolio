import React, { Fragment } from 'react';
import './App.css';
import About from './components/Pages/About';
import Education from './components/Pages/education/Education';
import Picture from './components/Pages/Picture';
import Skills from './components/Pages/skills/Skills';
import ContactMe from './components/Pages/ContactMe';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
	return (
		<Fragment>
			<Sidebar />
			<Picture />
			<About />
			<Education />
			<Skills />
			<ContactMe />
		</Fragment>
	);
};

export default App;
